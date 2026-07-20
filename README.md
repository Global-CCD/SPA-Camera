# 📸 Multi-Res Camera App

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen.svg)

A lightweight, single-page progressive web application (PWA) that allows users to capture photos at specific, dynamically calculated resolutions directly from their mobile device's browser. Built entirely with Vanilla HTML, CSS, and JavaScript.

**Cloudflare Demos**
- Main Branch - https://spa-camera.pages.dev/
- v1 release - https://bce4d25f.spa-camera.pages.dev/
- v2 release - https://682028dd.spa-camera.pages.dev/

## ✨ Features

- **Hardware Auto-Detection**: Automatically queries the device's camera sensor to determine its maximum supported resolution.
- **Dynamic Resolution Modes**: Instantly calculates and displays the exact pixel dimensions for three capture modes:
  - **High:** Maximum hardware sensor resolution (100%)
  - **Medium:** 50% sensor scale
  - **Low:** 25% sensor scale
- **Zero Server Storage**: Completely privacy-focused. Photos are processed via the HTML5 `<canvas>` API and saved directly to the user's local device storage.
- **Mobile-First UI**: Features a sleek, dark-mode iOS/Android inspired viewfinder interface.
- **Zero Dependencies**: No React, Vue, or external libraries. Just clean, native Web APIs.

## 🚀 Live Demo

*(Add your GitHub pages link here, e.g., `https://yourusername.github.io/multi-res-camera`)*

## 🛠 Usage & Installation

Because this is a pure front-end application, there is no build step required. 

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/multi-res-camera.git
   ```
2. Navigate to the project directory:
   ```bash
   cd multi-res-camera
   ```
3. **Important:** Modern web browsers require a secure context (**HTTPS**) to access media devices (camera/microphone). To test locally on a mobile device, you must serve the file over HTTPS or use a local network tunneling tool like `ngrok` or `localtunnel`.
   
   If testing on a desktop `localhost` (which is automatically treated as a secure context):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Or using Node.js (http-server)
   npx http-server
   ```

## 🧠 How It Works

1. **Camera Initialization**: The app uses `navigator.mediaDevices.getUserMedia()` with an oversized `ideal` constraint (4096x2160) to force the mobile device to report its maximum physical sensor capability.
2. **Resolution Downscaling**: Instead of stopping and starting the camera stream (which causes UI freezing on mobile), the app maintains the high-res stream and uses the HTML5 `<canvas>` context to cleanly downscale the image matrix to the exact target resolution requested by the user.
3. **Local Export**: The canvas data is serialized into a JPEG Blob and passed to a temporary anchor tag (`<a>`) with a `download` attribute, triggering the mobile OS's native file-save dialogue.

## 📱 Browser Support

Fully supported on modern mobile browsers:
- Safari on iOS 11+
- Google Chrome on Android 60+
- Firefox Mobile

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
