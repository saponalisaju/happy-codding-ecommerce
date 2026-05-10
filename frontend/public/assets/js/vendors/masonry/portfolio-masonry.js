/**=====================
   Portfolio Masonry JS
==========================**/
document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.grid');
    if (grid) {
        var msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            percentPosition: true
        });

        var images = grid.querySelectorAll('img');
        var loadedCount = 0;
        images.forEach(function (img) {
            if (img.complete) {
                loadedCount++;
                if (loadedCount === images.length) {
                    msnry.layout();
                }
            } else {
                img.addEventListener('load', function () {
                    loadedCount++;
                    msnry.layout();
                });
            }
        });
    }
});
