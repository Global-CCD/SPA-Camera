# SPA-Camera 
## 📸 Camera Studio Pro

**Camera Studio Pro** is a minimal, professional web-based camera application designed for high-resolution field capture. It maximizes hardware sensor capabilities and provides a seamless bridge between local device storage and **Cloudflare R2 Cloud Storage**.

## 🚀 Live Demos

| Version | Link |
| :--- | :--- |
| **Main Branch** | [spa-camera.pages.dev](https://spa-camera.pages.dev/) |
| **v2 Release (Latest)** | [682028dd.spa-camera.pages.dev](https://682028dd.spa-camera.pages.dev/) |
| **v1 Release** | [bce4d25f.spa-camera.pages.dev](https://bce4d25f.spa-camera.pages.dev/) |

---

## 💎 v2.0 Release Highlights

The **v2 release** marks a significant transition from a "utility tool" to a "professional studio" experience.

*   **Professional Aesthetic:** Shifted to a minimal, high-contrast Blue theme for a more "enterprise" feel.
*   **Default Light Mode:** Prioritized visibility for outdoor use while maintaining a Dark Mode toggle for low-light environments.
*   **Persistent Theme Toggling:** Your preference for Light or Dark mode is saved to `localStorage` and persists between sessions.
*   **Refined Mobile Ergonomics:** Updated CSS using `dvh` (Dynamic Viewport Units) and `env(safe-area-inset)` to ensure zero overlap with mobile browser toolbars or OS gesture bars.
*   **Flexible Storage Logic:** Local-first by default. Users can now toggle between three distinct storage modes (Local, Cloud, or Hybrid) directly from the dashboard.

---

## ✨ Key Features

*   **Hardware Sensor Detection:** Automatically probes for the maximum possible hardware resolution (up to 4K) to bypass standard browser downscaling.
*   **Cloudflare R2 Integration:** Effortless background synchronization of images to Cloudflare R2 buckets using serverless Workers.
*   **Dynamic UI Setup:** Configure your API endpoints directly in the app. No code editing required to point to your specific Cloudflare instance.
*   **Zero-Dependency:** Built with vanilla JS, HTML5, and CSS3 for maximum speed and compatibility.

---

## 🛠️ Setup & Deployment

### 1. The Storage (Cloudflare R2)
1. Create a bucket in your Cloudflare Dashboard named `spa-camera-demo1`.
2. Ensure you have your Account ID ready.

### 2. The Bridge (Cloudflare Worker)
Deploy the provided Worker script (`orange-leaf-8368`). Ensure your `wrangler.toml` includes the R2 binding:

```toml
name = "orange-leaf-8368"
main = "src/index.js"
compatibility_date = "2024-02-01"

[[r2_buckets]]
binding = "MY_BUCKET"
bucket_name = "spa-camera-demo1"
```

### 3. The Frontend
1. Open the [Live Demo](https://spa-camera.pages.dev/) or your own fork.
2. Tap the **⚙️ Setup API** icon.
3. Enter your Worker Name (`orange-leaf-8368`) and your Cloudflare subdomain (e.g., `your-account.workers.dev`).
4. Click **Save Configuration**.

---

## 📄 License
MIT License - feel free to use this for your own professional or personal projects.
