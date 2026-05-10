/*====================
    Review Rating JS
=======================*/
const starInputs = document.querySelectorAll('.star-rating-input i');
starInputs.forEach(star => {
    star.addEventListener('click', function () {
        const value = this.getAttribute('data-value');
        starInputs.forEach(s => {
            if (s.getAttribute('data-value') <= value) {
                s.classList.replace('ri-star-line', 'ri-star-fill');
                s.classList.add('active');
            } else {
                s.classList.replace('ri-star-fill', 'ri-star-line');
                s.classList.remove('active');
            }
        });
    });

    star.addEventListener('mouseenter', function () {
        const value = this.getAttribute('data-value');
        starInputs.forEach(s => {
            if (s.getAttribute('data-value') <= value) {
                s.style.color = 'rgba(var(--star), 1)';
            }
        });
    });

    star.addEventListener('mouseleave', function () {
        starInputs.forEach(s => {
            if (!s.classList.contains('active')) {
                s.style.color = '';
            }
        });
    });
});