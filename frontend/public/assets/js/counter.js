/*====================
  Counter JS
=======================*/
document.querySelectorAll(".counter-count").forEach(function (counter) {
  let countTo = parseInt(counter.textContent, 10);
  let countFrom = 0;

  function animateCount() {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      let progress = timestamp - startTime;
      let countValue = Math.min(Math.ceil(countFrom + (countTo - countFrom) * (progress / 4000)), countTo);

      counter.textContent = countValue;

      if (progress < 4000) {
        window.requestAnimationFrame(step);
      }
    }

    window.requestAnimationFrame(step);
  }

  animateCount();
});


/* ====================
landing counter
======================*/
if ("IntersectionObserver" in window) {
  let counterObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        let counter = entry.target;
        let target = parseInt(counter.innerText.replace(/,/g, ""));
        let step = target / 200;
        let current = 0;
        let timer = setInterval(function () {
          current += step;
          counter.innerText = Math.floor(current).toLocaleString();

          if (Math.floor(current) >= target) {
            clearInterval(timer);
            counter.innerText = target.toLocaleString();
          }
        }, 10);
        counterObserver.unobserve(counter);
      }
    });
  });

  let counters = document.querySelectorAll(".counter");
  counters.forEach(function (counter) {
    counterObserver.observe(counter);
  });
}




