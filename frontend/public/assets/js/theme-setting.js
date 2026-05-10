/*====================
    Theme Setting JS
=======================*/
document.addEventListener("DOMContentLoaded", function () {
    document.body.insertAdjacentHTML("beforeend", `
        <div class="theme-setting-panel" id="themeSettingPanel">
            <button class="theme-panel-toggle" id="themePanelToggle" title="Settings">
                <i class="ri-settings-3-line"></i>
            </button>
            <div class="theme-panel-content">
                <h6>Theme Settings</h6>

                <div class="theme-option">
                    <span>Dark Mode</span>
                    <button class="theme-toggle-btn" id="darkModeBtn">Dark</button>
                </div>

                <div class="theme-option">
                    <span>RTL Layout</span>
                    <button class="theme-toggle-btn" id="rtlModeBtn">RTL</button>
                </div>
            </div>
        </div>
    `);

    var darkBtn = document.getElementById("darkModeBtn");
    var rtlBtn = document.getElementById("rtlModeBtn");
    var bootstrapLink = document.getElementById("bootstrap-style");
    var htmlTag = document.documentElement;
    var body = document.body;
    var themePanelToggle = document.getElementById("themePanelToggle");
    var themePanel = document.getElementById("themeSettingPanel");

    themePanelToggle.addEventListener("click", function () {
        themePanel.classList.toggle("open");
    });

    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark");
        darkBtn.classList.add("active");
    }

    if (localStorage.getItem("rtl-mode") === "true") {
        htmlTag.setAttribute("dir", "rtl");
        if (bootstrapLink) {
            bootstrapLink.href = "../assets/css/vendors/bootstrap/bootstrap.rtl.css";
        }
        rtlBtn.classList.add("active");
    }

    darkBtn.addEventListener("click", function () {
        body.classList.toggle("dark");
        darkBtn.classList.toggle("active");
        localStorage.setItem("dark-mode", body.classList.contains("dark"));
    });

    rtlBtn.addEventListener("click", function () {
        var isRtl = htmlTag.getAttribute("dir") === "rtl";

        if (isRtl) {
            htmlTag.removeAttribute("dir");
            if (bootstrapLink) bootstrapLink.href =
                "../assets/css/vendors/bootstrap/bootstrap.css";
            rtlBtn.classList.remove("active");
            localStorage.setItem("rtl-mode", "false");
        } else {
            htmlTag.setAttribute("dir", "rtl");
            if (bootstrapLink) bootstrapLink.href =
                "../assets/css/vendors/bootstrap/bootstrap.rtl.css";
            rtlBtn.classList.add("active");
            localStorage.setItem("rtl-mode", "true");
        }
    });

});