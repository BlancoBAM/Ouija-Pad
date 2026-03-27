# Ouija Pad

<div align="center">

**A gothic notepad with an immersive ouija board virtual keyboard**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tauri](https://img.shields.io/badge/Tauri-2.10.3-24c8db.svg)](https://tauri.app/)
[![Platform: Linux](https://img.shields.io/badge/Platform-Linux-e95420.svg)](https://www.linux.org/)
[![Build Status](https://github.com/BlancoBAM/ouija-pad/actions/workflows/build-release.yml/badge.svg)](https://github.com/BlancoBAM/ouija-pad/actions)

</div>

---

## ✨ Overview

Ouija Pad transforms your writing experience into something mystical. This distraction-free notepad features an interactive ouija board virtual keyboard where every keystroke brings the board to life—a planchette smoothly glides across the screen to pinpoint each character you channel.

Built with **Tauri** for native Linux performance, Ouija Pad delivers an atmospheric, gothic writing environment without the overhead of a web browser.

![Ouija Pad Screenshot](src/ouija.webp)

---

## 🔮 Features

### Core Functionality
- **Interactive Planchette Animation** — The pointer dynamically animates to the exact position for letters, numbers, and punctuation using precise coordinate mapping
- **Dual Input Modes** — Click directly on the ouija board hotspots or type on your physical keyboard; the planchette responds either way
- **Real-time Character Rendering** — Watch the planchette glide to each character as you type, with the same accuracy whether using physical or virtual input
- **Persistent Local Storage** — Your writings are automatically saved to browser LocalStorage and restored on next launch

### Gothic Aesthetic
- **Large Ouija Board Display** — The board occupies the lower 60% of the screen with a translucent, frosted-glass overlay effect
- **Dark Ambient Styling** — Custom gothic fonts (Creepster, Special Elite), ambient purple mist gradients, and gold spirit highlights
- **Smooth Animations** — Cubic-bezier transitions for planchette movement and keyboard dock interactions
- **Burn Page Protocol** — Confirmation-gated page clearing that purges all stored content

### User Experience
- **Distraction-Free Writing** — Minimalist editor with no toolbars or menus to clutter your creative space
- **Responsive Layout** — Adapts to different screen sizes while maintaining the ouija board's aspect ratio
- **Keyboard Toggle** — Hide/show the ouija board with a single button when you need more writing space

---

## 📦 Installation

### From Releases (Recommended)

Download the latest release from the [Releases page](https://github.com/BlancoBAM/ouija-pad/releases) and install:

#### Debian/Ubuntu (.deb)
```bash
sudo dpkg -i ouija-pad_*.deb
sudo apt-get install -f  # Install dependencies if needed
```

#### RPM-based (.rpm)
```bash
sudo rpm -i ouija-pad-*.rpm
# or for Fedora
sudo dnf install ouija-pad-*.rpm
```

#### AppImage (Universal)
```bash
chmod +x Ouija_Pad_*.AppImage
./Ouija_Pad_*.AppImage
```

### From Source

```bash
# Clone the repository
git clone https://github.com/BlancoBAM/ouija-pad.git
cd ouija-pad

# Install Node.js dependencies
npm install

# Run in development mode
npm run tauri:dev
```

### Build Production Packages

```bash
# Build release packages (.deb, .rpm, .AppImage)
npm run tauri:build

# Or use cargo directly for specific formats
cd src-tauri
cargo deb          # Build .deb package
cargo generate-rpm # Build .rpm package
```

Built packages will be available in:
- `.deb`: `src-tauri/target/debian/`
- `.rpm`: `src-tauri/target/generate-rpm/`
- `.AppImage`: `src-tauri/target/release/bundle/appimage/`

### Desktop Integration

After building/installing, the desktop launcher is automatically installed to:
- `/usr/share/applications/ouija-pad.desktop`

Icon installed to:
- `/usr/share/icons/hicolor/128x128/apps/ouija-pad.png`

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Desktop Runtime** | Tauri 2.x (Rust + WebKit2GTK) |
| **Fonts** | Creepster, Nosifer, Special Elite, Inter (Google Fonts) |
| **Storage** | Browser LocalStorage |
| **Packaging** | cargo-deb, cargo-generate-rpm, AppImage |

---

## 🎮 Usage

### Writing
1. Launch Ouija Pad from your applications menu or via terminal: `ouija-pad`
2. Start typing—watch the planchette glide to each character on the ouija board
3. Click directly on board hotspots to input characters
4. Use the control buttons (SPACE, DELETE, ENTER) for special actions

### Managing Notes
- **Auto-save**: All content is automatically persisted to LocalStorage
- **Burn Page**: Click the button in the top-right to clear all content (with confirmation)

### Keyboard Visibility
- Click **▼ HIDE** to collapse the ouija board
- Click **▲ OUIJA KEYBOARD** (bottom-right) to restore it

---

## 📁 Project Structure

```
ouija-pad/
├── src/                    # Frontend source files
│   ├── index.html          # Main HTML structure
│   ├── style.css           # Gothic styling and animations
│   ├── script.js           # Planchette logic and input handling
│   ├── ouija.webp          # Ouija board image asset
│   └── README.md           # Frontend documentation
├── src-tauri/              # Tauri backend (Rust)
│   ├── src/
│   │   ├── main.rs         # Rust entry point
│   │   └── lib.rs          # Tauri application setup
│   ├── capabilities/       # Tauri capability permissions
│   ├── icons/              # Application icons
│   ├── Cargo.toml          # Rust dependencies + packaging config
│   ├── build.rs            # Build script
│   └── tauri.conf.json     # Tauri configuration
├── .github/
│   └── workflows/
│       └── build-release.yml  # GitHub Actions CI/CD
├── package.json            # Node.js dependencies and scripts
├── ouija-pad.desktop       # Linux desktop launcher
├── LICENSE                 # MIT License
└── README.md               # This file
```

---

## 🔀 Related Projects

- **[Keyuijaboard](https://github.com/BlancoBAM/keyuijaboard)** — A floating, always-on-top version of the ouija keyboard for system-wide text input into any application

---

## 🚀 CI/CD

This project uses GitHub Actions for automated builds and releases:

- **On every push to `main`**: Builds all package formats as artifacts
- **On version tags (`v*`)**: Creates a GitHub Release with `.deb`, `.rpm`, and `.AppImage` assets

Workflow: `.github/workflows/build-release.yml`

---

## 🐛 Troubleshooting

### Build Issues
```bash
# Clean and rebuild
cd src-tauri
cargo clean
cd ..
npm run tauri:build
```

### Missing Dependencies (Ubuntu/Debian)
```bash
sudo apt-get install -y \
    libgtk-3-dev \
    libwebkit2gtk-4.0-dev \
    libappindicator3-dev \
    librsvg2-dev \
    libssl-dev
```

---

## 📄 License

**MIT License**

Copyright (c) 2026 Lilith Linux Team

See [LICENSE](LICENSE) for full text.

---

## 🙏 Acknowledgments

- **Tauri Team** — For the excellent native desktop framework
- **Google Fonts** — For the atmospheric typefaces
- **Lilith Linux Community** — For inspiration and support

---

<div align="center">

**Channel your thoughts from beyond...** 🕯️

Made with 🖤 for writers who dare to explore the shadows

</div>
