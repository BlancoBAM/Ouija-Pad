// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
  // Fix blank white/grey window on Linux caused by WebKit2GTK's DMA-BUF
  // GPU compositor failing silently. Must be set before the WebView is created.
  #[cfg(target_os = "linux")]
  {
    std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1");
    std::env::set_var("WEBKIT_DISABLE_COMPOSITING_MODE", "1");
  }

  ouija_pad_lib::run();
}
