/*====================
  Range Slider JS
=======================*/
document.addEventListener("DOMContentLoaded", function () {

  const rangeInput = document.querySelectorAll(".range-input input");
  const priceInput = document.querySelectorAll(".price-input input");
  const progress = document.querySelector(".slider .progress");

  const priceGap = 1000;

  function isRTL() {
    return document.documentElement.getAttribute("dir") === "rtl";
  }

  function updateProgress(minVal, maxVal) {
    const max = parseInt(rangeInput[0].max, 10);

    const minPercent = (minVal / max) * 100;
    const maxPercent = (maxVal / max) * 100;

    if (isRTL()) {
      progress.style.right = minPercent + "%";
      progress.style.left = (100 - maxPercent) + "%";
    } else {
      progress.style.left = minPercent + "%";
      progress.style.right = (100 - maxPercent) + "%";
    }
  }

  /* =========================
    Price Input Change JS
  ========================= */
  priceInput.forEach(input => {
    input.addEventListener("input", function () {

      let minPrice = parseInt(priceInput[0].value, 10) || 0;
      let maxPrice = parseInt(priceInput[1].value, 10) || 0;

      if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {

        rangeInput[0].value = minPrice;
        rangeInput[1].value = maxPrice;

        updateProgress(minPrice, maxPrice);
      }
    });
  });

  /* =========================
    Range Slider Change JS
  ========================= */
  rangeInput.forEach(input => {
    input.addEventListener("input", function (e) {

      let minVal = parseInt(rangeInput[0].value, 10);
      let maxVal = parseInt(rangeInput[1].value, 10);

      if (maxVal - minVal < priceGap) {

        if (e.target.classList.contains("range-min")) {
          rangeInput[0].value = maxVal - priceGap;
        } else {
          rangeInput[1].value = minVal + priceGap;
        }

      } else {

        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;

        updateProgress(minVal, maxVal);
      }
    });
  });

  updateProgress(
    parseInt(rangeInput[0].value, 10),
    parseInt(rangeInput[1].value, 10)
  );
});