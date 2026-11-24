/* ============================================================
   EDIT THIS ONE LINE with your real download link, then save.
   Recommended: your GitHub Releases "latest" page.
   Example: https://github.com/YOUR_USERNAME/pdf-toolkit/releases/latest
   ============================================================ */
const DOWNLOAD_URL = "https://github.com/freepdftoolkit/-free-pdf-toolkit/releases/latest/download/Free.PDF.Toolkit.v1.0.exe";

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-download]").forEach(function (el) {
    el.setAttribute("href", DOWNLOAD_URL);
  });
});
