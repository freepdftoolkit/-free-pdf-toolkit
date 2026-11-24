/* ============================================================
   EDIT THIS ONE LINE with your real download link, then save.
   Recommended: your GitHub Releases "latest" page.
   Example: https://github.com/YOUR_USERNAME/pdf-toolkit/releases/latest
   ============================================================ */
const DOWNLOAD_URL = "https://reliable-marzipan-9bf0cd.netlify.app/downloads/Free-PDF-Toolkit-v1.0.exe";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-download]").forEach(function (el) {
    el.setAttribute("href", DOWNLOAD_URL);
  });
});
