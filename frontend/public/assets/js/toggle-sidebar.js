/*====================
    Toggle Sidebar JS
=======================*/
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".hide-show-btn");
    const rightCol = document.querySelector(".col-xxl-9.col-xl-8");
    const leftCol = document.querySelector(".col-xxl-3.col-xl-4");
    const shopFilter = document.querySelector(".shop-filter");
    const backBtn = document.querySelector(".shop-mobile-back");
    const bgOverlay = document.querySelector(".bg-overlay");

    toggleBtn.addEventListener("click", () => {
        if (window.innerWidth <= 1199) {
            const isVisible = shopFilter.classList.contains("show");

            if (isVisible) {
                shopFilter.classList.remove("show");
                bgOverlay.classList.remove("show");
            } else {
                shopFilter.classList.add("show");
                bgOverlay.classList.add("show");
            }

            return;
        }

        const isExpanded = rightCol.classList.contains("col-12");

        if (isExpanded) {
            rightCol.classList.remove("col-12");
            rightCol.classList.add("col-xxl-9", "col-xl-8");
            leftCol.classList.remove("sidebar-hide");
            toggleBtn.innerHTML = `<i class="ri-equalizer-2-line"></i> Hide Filter`;
        } else {
            rightCol.classList.remove("col-xxl-9", "col-xl-8");
            rightCol.classList.add("col-12");
            leftCol.classList.add("sidebar-hide");
            toggleBtn.innerHTML = `<i class="ri-equalizer-2-line"></i> Show Filter`;
        }
    });

    if (backBtn) {
        backBtn.addEventListener("click", () => {
            shopFilter.classList.remove("show");
            bgOverlay.classList.remove("show");
        });
    }

    if (bgOverlay) {
        bgOverlay.addEventListener("click", () => {
            shopFilter.classList.remove("show");
            bgOverlay.classList.remove("show");
        });
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1199) {
            shopFilter.classList.remove("show");
            bgOverlay.classList.remove("show");
        }
    });
});