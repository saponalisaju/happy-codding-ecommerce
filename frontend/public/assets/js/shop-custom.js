/*====================
  Shop Custom JS
=======================*/
document.addEventListener("DOMContentLoaded", function () {
  const filterOptions = document.querySelectorAll(".filter-option-grid .filter-box");
  const productContents = document.querySelectorAll(".product-tab-content > div");

  if (filterOptions.length && productContents.length) {
    filterOptions[0].classList.add("active");
    productContents.forEach(content => {
      content.className = "row-cols-xxl-3 row-cols-xl-2 row-cols-lg-3 row-cols-sm-2 row-cols-1 grid-section view-option row g-3 g-xl-4";
    });

    filterOptions.forEach((option, index) => {
      option.addEventListener("click", function (e) {
        e.preventDefault();
        filterOptions.forEach(el => el.classList.remove("active"));
        this.classList.add("active");

        productContents.forEach(content => {
          if (index === 0) {
            content.className = "row-cols-xxl-3 row-cols-xl-2 row-cols-lg-3 row-cols-sm-2 row-cols-1 grid-section view-option row g-3 g-xl-4";
          } else if (index === 1) {
            content.className = "list-section view-option row row-cols-1 g-3 g-xl-4";
          }
        });
      });
    });
  }
});