use serde::Serialize;
use tauri::AppHandle;
use tauri_plugin_dialog::{DialogExt, FilePath};

#[derive(Serialize)]
struct OpenedFile {
    path: String,
    content: String,
}

#[tauri::command]
async fn open_file(app: AppHandle) -> Result<Option<OpenedFile>, String> {
    let file_path = tauri::async_runtime::spawn_blocking(move || {
        app.dialog()
            .file()
            .add_filter("Text & Markdown", &["txt", "md"])
            .blocking_pick_file()
    })
    .await
    .map_err(|e| e.to_string())?;

    match file_path {
        Some(fp) => {
            let path_str = match fp {
                FilePath::Path(p) => p.to_string_lossy().into_owned(),
                FilePath::Url(u) => u
                    .to_file_path()
                    .map(|p| p.to_string_lossy().into_owned())
                    .unwrap_or_default(),
            };
            let content =
                std::fs::read_to_string(&path_str).map_err(|e| e.to_string())?;
            Ok(Some(OpenedFile { path: path_str, content }))
        }
        None => Ok(None),
    }
}

#[tauri::command]
async fn save_file(path: String, content: String) -> Result<(), String> {
    std::fs::write(&path, content).map_err(|e| e.to_string())
}

#[tauri::command]
async fn save_file_as(
    app: AppHandle,
    content: String,
    default_name: Option<String>,
) -> Result<Option<String>, String> {
    let name = default_name.unwrap_or_else(|| "untitled.txt".to_string());

    let file_path = tauri::async_runtime::spawn_blocking(move || {
        app.dialog()
            .file()
            .add_filter("Text Files", &["txt"])
            .add_filter("Markdown", &["md"])
            .set_file_name(&name)
            .blocking_save_file()
    })
    .await
    .map_err(|e| e.to_string())?;

    match file_path {
        Some(fp) => {
            let path_str = match fp {
                FilePath::Path(p) => p.to_string_lossy().into_owned(),
                FilePath::Url(u) => u
                    .to_file_path()
                    .map(|p| p.to_string_lossy().into_owned())
                    .unwrap_or_default(),
            };
            std::fs::write(&path_str, content).map_err(|e| e.to_string())?;
            Ok(Some(path_str))
        }
        None => Ok(None),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![open_file, save_file, save_file_as])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
