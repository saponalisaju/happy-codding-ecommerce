/*====================
  Onclick nav active JS
========================**/
document.querySelectorAll('.dashboard-card').forEach(card => {
    card.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');
        if (tabId) {
            const tabTrigger = document.querySelector(`#${tabId}`);
            if (tabTrigger) {
                const tab = new bootstrap.Tab(tabTrigger);
                tab.show();
            }
        }
    });
});

/*====================
  Sidebar toggle JS
========================**/
document.addEventListener("DOMContentLoaded", () => {
    const filterButton = document.querySelector(".filter-button");
    const dashboardSidebar = document.querySelectorAll(".dashboard-sidebar");
    const sidebarClose = document.querySelector(".sidebar-close");
    const bgOverlay = document.querySelector(".bg-overlay");

    filterButton.addEventListener("click", () => {
        dashboardSidebar.forEach(block => block.classList.add("show"));
        if (bgOverlay) bgOverlay.classList.add("show");
        document.body.style.overflow = "hidden";
    });

    const hideFilter = () => {
        dashboardSidebar.forEach(block => block.classList.remove("show"));
        if (bgOverlay) bgOverlay.classList.remove("show");
        document.body.style.overflow = "";
    };

    sidebarClose.addEventListener("click", hideFilter);
    if (bgOverlay) bgOverlay.addEventListener("click", hideFilter);
});