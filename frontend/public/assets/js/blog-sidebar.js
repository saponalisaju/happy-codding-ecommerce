/*====================
    Blog Sidebar JS
=======================*/
document.addEventListener("DOMContentLoaded", () => {
    const filterBtn = document.querySelector(".filter-btn");
    const blogLeftBox = document.querySelectorAll(".blog-left-box-2,.blog-left-box");
    const closeBtn = document.querySelector(".blog-close-btn");
    const bgOverlay = document.querySelector(".bg-overlay");

    filterBtn.addEventListener("click", () => {
        blogLeftBox.forEach(block => block.classList.add("show"));
        if (bgOverlay) bgOverlay.classList.add("show");
    });

    const hideFilter = () => {
        blogLeftBox.forEach(block => block.classList.remove("show"));
        if (bgOverlay) bgOverlay.classList.remove("show");
    };

    closeBtn.addEventListener("click", hideFilter);
    if (bgOverlay) bgOverlay.addEventListener("click", hideFilter);
});