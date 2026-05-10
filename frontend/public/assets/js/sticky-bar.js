/*=========================
  Sticky Bottom Bar JS
=========================*/
document.addEventListener('DOMContentLoaded', function () {
    const stickyBar = document.querySelector('.sticky-bottom-bar');

    if (stickyBar) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 600) {
                document.body.classList.add('sticky_cart');
            } else {
                document.body.classList.remove('sticky_cart');
            }
        });
    }
});



