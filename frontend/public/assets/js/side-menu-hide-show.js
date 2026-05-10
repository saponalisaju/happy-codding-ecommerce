/*====================
    Side Menu Toggle JS
=======================*/
document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector(".filter-button.btn");
    const filterBlocks = document.querySelectorAll(".shop-filter, .shop-filter-2");
    const backBtn = document.querySelector(".shop-mobile-back");
    const bgOverlay = document.querySelector(".bg-overlay");

    filterBtn.addEventListener("click", () => {
        filterBlocks.forEach(block => block.classList.add("show"));
        if (bgOverlay) bgOverlay.classList.add("show");
        document.body.style.overflow = "hidden";
    });

    const hideFilter = () => {
        filterBlocks.forEach(block => block.classList.remove("show"));
        if (bgOverlay) bgOverlay.classList.remove("show");
        document.body.style.overflow = "";
    };

    backBtn.addEventListener("click", hideFilter);
    if (bgOverlay) bgOverlay.addEventListener("click", hideFilter);
});