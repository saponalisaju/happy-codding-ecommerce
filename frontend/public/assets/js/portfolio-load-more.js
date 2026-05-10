/*====================
    Portfolio Load More JS
=======================*/
document.addEventListener('DOMContentLoaded', function () {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const hiddenItems = document.querySelectorAll('.load-more-item');
    const grid = document.querySelector('.grid');
    let currentItems = 0;
    const itemsToShow = 4;

    if (loadMoreBtn && grid) {
        loadMoreBtn.addEventListener('click', function () {
            const nextItems = Array.from(hiddenItems).slice(currentItems, currentItems +
                itemsToShow);

            nextItems.forEach((item, index) => {
                item.classList.remove('d-none');
            });

            currentItems += itemsToShow;

            if (currentItems >= hiddenItems.length) {
                loadMoreBtn.parentElement.classList.add('d-none');
            }

            if (window.Masonry) {
                const msnry = Masonry.data(grid);
                if (msnry) {
                    const images = grid.querySelectorAll('img');
                    let loadedCount = 0;
                    images.forEach(img => {
                        if (img.complete) {
                            loadedCount++;
                            if (loadedCount === images.length) msnry.layout();
                        } else {
                            img.addEventListener('load', () => {
                                loadedCount++;
                                msnry.layout();
                            });
                        }
                    });
                    msnry.layout();
                }
            }

            const lgContainer = document.getElementById('lightgallery');
            if (lgContainer && window.lightGallery) {
                const instance = lightGallery(lgContainer);
                if (instance && instance.refresh) {
                    instance.refresh();
                }
            }
        });
    }
});