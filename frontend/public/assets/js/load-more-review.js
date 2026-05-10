/*====================
    Load More Review JS
=======================*/
const loadMoreBtn = document.getElementById('load-more-reviews-btn');
const reviewsList = document.getElementById('reviews-list');

if (loadMoreBtn && reviewsList) {
    loadMoreBtn.addEventListener('click', function () {
        const hiddenReviews = reviewsList.querySelectorAll('.review-card.d-none');
        const reviewsToShow = 3;

        for (let i = 0; i < Math.min(hiddenReviews.length, reviewsToShow); i++) {
            hiddenReviews[i].classList.remove('d-none');
            hiddenReviews[i].style.opacity = '0';
            setTimeout(((el) => {
                return () => {
                    el.style.transition = 'opacity 0.5s ease-in-out';
                    el.style.opacity = '1';
                };
            })(hiddenReviews[i]), 10);
        }

        if (reviewsList.querySelectorAll('.review-card.d-none').length === 0) {
            const loadMoreBox = document.getElementById('load-more-reviews-box');
            if (loadMoreBox) loadMoreBox.classList.add('d-none');
        }
    });
}