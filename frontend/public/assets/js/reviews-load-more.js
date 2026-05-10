/*====================
    Review Load More JS
=======================*/
document.addEventListener("DOMContentLoaded", function () {
    const reviewsWrapper = document.getElementById("reviewsWrapper");
    const loadMoreBtn = document.getElementById("loadMoreReviews");

    const moreReviews = [
        {
            name: "Sarah Johnson",
            avatar: null,
            initials: "SJ",
            verified: true,
            rating: 5,
            date: "Sep 28, 2025",
            title: "Impressive features",
            comment: "The health monitoring features are top-notch. I especially like the heart rate tracking and sleep analysis. Highly recommend!"
        },
        {
            name: "David Chen",
            avatar: null,
            initials: "DC",
            verified: true,
            rating: 4,
            date: "Sep 20, 2025",
            title: "Solid build quality",
            comment: "The titanium body feels very sturdy but lightweight. The screen is bright and easy to read even in direct sunlight.",
            images: ["../assets/images/product/watch/3.png"]
        },
        {
            name: "Emily Wilson",
            avatar: null,
            initials: "EW",
            verified: false,
            rating: 5,
            date: "Sep 15, 2025",
            title: "Absolutely gorgeous",
            comment: "This watch looks even better in person. The interface is very fluid and easy to navigate."
        }
    ];

    let currentReviewIndex = 0;
    const itemsPerLoad = 2;

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", function () {
            const btn = this;
            const originalContent = btn.innerHTML;

            btn.disabled = true;
            btn.innerHTML = '<span>Loading...</span> <i class="ri-loader-4-line spin"></i>';

            setTimeout(() => {
                const nextReviews = moreReviews.slice(currentReviewIndex, currentReviewIndex + itemsPerLoad);

                nextReviews.forEach(review => {
                    const reviewItem = document.createElement("div");
                    reviewItem.className = "review-item-modal";
                    reviewItem.style.opacity = "0";
                    reviewItem.style.transform = "translateY(20px)";
                    reviewItem.style.transition = "all 0.4s ease-out";

                    let starsHtml = "";
                    for (let i = 1; i <= 5; i++) {
                        starsHtml += `<i class="ri-star-${i <= review.rating ? 'fill' : 'line'}"></i> `;
                    }

                    let avatarHtml = review.avatar
                        ? `<img src="${review.avatar}" alt="user" class="avatar img-fluid">`
                        : `<div class="avatar-placeholder">${review.initials}</div>`;

                    let imagesHtml = (review.images && review.images.length > 0)
                        ? `<ul class="review-gallery">${review.images.map(img => `<li><img src="${img}" alt=""></li>`).join('')}</ul>`
                        : "";

                    reviewItem.innerHTML = `
                        <div class="review-header">
                            <div class="user-meta">
                                <div class="user-info">
                                    ${avatarHtml}
                                    <div>
                                        <h6>${review.name}</h6>
                                        ${review.verified ? '<span class="verified">Verified Purchase</span>' : ''}
                                    </div>
                                </div>
                                <div class="review-rating">
                                    <div class="stars">${starsHtml}</div>
                                    <span class="date">${review.date}</span>
                                </div>
                            </div>
                        </div>
                        <div class="review-body">
                            <h6>${review.title}</h6>
                            <p>${review.comment}</p>
                            ${imagesHtml}
                        </div>
                    `;

                    reviewsWrapper.appendChild(reviewItem);

                    setTimeout(() => {
                        reviewItem.style.opacity = "1";
                        reviewItem.style.transform = "translateY(0)";
                    }, 50);
                });

                currentReviewIndex += itemsPerLoad;

                btn.disabled = false;
                btn.innerHTML = originalContent;

                if (currentReviewIndex >= moreReviews.length) {
                    btn.parentElement.style.display = "none";
                }
            }, 800);
        });
    }

    const starInput = document.querySelectorAll(".star-rating-input li i");
    starInput.forEach(star => {
        star.addEventListener("mouseover", function () {
            const val = parseInt(this.getAttribute("data-value"), 10);
            starInput.forEach(s => {
                if (parseInt(s.getAttribute("data-value"), 10) <= val) {
                    s.classList.replace("ri-star-line", "ri-star-fill");
                }
            });
        });

        star.addEventListener("mouseout", function () {
            const activeVal = document.querySelector(".star-rating-input").getAttribute("data-rating") || 0;
            starInput.forEach(s => {
                if (parseInt(s.getAttribute("data-value"), 10) > activeVal) {
                    s.classList.replace("ri-star-fill", "ri-star-line");
                } else {
                    s.classList.replace("ri-star-line", "ri-star-fill");
                }
            });
        });

        star.addEventListener("click", function () {
            const val = this.getAttribute("data-value");
            document.querySelector(".star-rating-input").setAttribute("data-rating", val);
        });
    });
});
