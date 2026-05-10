import Swiper from "swiper/bundle";
/*====================
    Custom Swiper Slider JS
=======================*/
var homeBanner = new Swiper(".home-banner", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
});
var homeBanner2 = new Swiper(".home-banner2", {
    loop: true,
    effect: "fade",
    slidesPerView: 'auto',
    spaceBetween: 10,
    thumbs: {
        swiper: homeBanner,
    },
});

var shoesHomeBanner = new Swiper(".shoes-home-banner", {
    loop: true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return `
          <span class="${currentClass}"></span> /
          <span class="${totalClass}"></span>`;
        },
        formatFractionCurrent: number => String(number).padStart(2, "0"),
        formatFractionTotal: number => String(number).padStart(2, "0"),
    },
});

var progressbarSlider = new Swiper(".progressbar-slider", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 24
        },
    },
});

var shoesBannerBox = new Swiper(".shoes-banner-slider", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 24,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 1.6,
        },
        1200: {
            slidesPerView: 2,
        },
    },
});

var shoesTestimonial = new Swiper(".shoes-testimonial", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 18
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 24
        },
    },
});

var shoesInstagram = new Swiper(".shoes-instagram", {
    slidesPerView: 7.8,
    loop: true,
    centeredSlides: true,
    autoplay: {
        enabled: true,
        delay: 0,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
    },
    freeMode: false,
    speed: 7000,
    freeModeMomentum: false,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        400: {
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 4,
        },
        670: {
            slidesPerView: 5,
        },
        930: {
            slidesPerView: 6,
        },
        1230: {
            slidesPerView: 7.2,
        },
        1450: {
            slidesPerView: 7.8,
        },
    },
});

var shoesFeaturesThumbSlider = new Swiper(".shoes-features-thumb-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
    allowTouchMove: false,
});

const shoesFeaturesMainSlider = new Swiper(".shoes-features-main-slider", {
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    thumbs: {
        swiper: shoesFeaturesThumbSlider,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

var groceryCategorySlider = new Swiper(".grocery-category-slider", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 6,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 24
        },
        1500: {
            slidesPerView: 5,
            spaceBetween: 24
        },
        1600: {
            slidesPerView: 6,
            spaceBetween: 24
        },
    },
});

var groceryTestimonial = new Swiper(".grocery-testimonial", {
    loop: true,
    centeredSlides: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 24
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 24
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 24
        },
    },
});
var brandLogoSlider = new Swiper(".brand-logo-slider", {
    loop: true,
    slidesPerView: 5,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 5,
        },
    },
});
var brandLogoSlider = new Swiper(".electronic-product", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
        },
        1554: {
            slidesPerView: 5,
        },
    },
});
var electronicLogo = new Swiper(".electronic-logo", {
    loop: true,
    slidesPerView: 6,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 6,
        },
    },
});
var classicWatchBox = new Swiper(".classic-watch-box", {
    spaceBetween: 10,
    loop: true,
    slidesPerView: 1,
    watchSlidesProgress: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        576: {
            effect: "fade",
            slidesPerView: 1,
        },
    },
});
var classicWatch = new Swiper(".classic-watch", {
    effect: "fade",
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    thumbs: {
        swiper: classicWatchBox,
    },
});
var trendyWatch = new Swiper(".trendy-watch", {
    spaceBetween: 30,
    slidesPerView: 2,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        575: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1199.98: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 2,
        },
    },
});
const collection_swiper = new Swiper(".collection-slider-1", {
    grabCursor: true,
    spaceBetween: 4,
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3.2,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 5,
        },
        1560: {
            slidesPerView: 5,
        },
    },
});
var bagHome = new Swiper(".bag-home", {
    loop: true,
    slidesPerView: 3,
});
var bagHome2 = new Swiper(".bag-home2", {
    loop: true,
    effect: "fade",
    thumbs: {
        swiper: bagHome,
    },
});
var fashionInstagram = new Swiper(".fashion-instagram", {
    loop: true,
    slidesPerView: 6,
    centeredSlides: true,
    spaceBetween: 20,
});
var categorySwiper = new Swiper(".category-swiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".category-swiper-next",
        prevEl: ".category-swiper-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 20,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 24
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 30
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 30
        },
    },
});
var homeSlider = new Swiper(".home-slider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var electronic = new Swiper(".electronic", {
    slidesPerView: 2.2,
    freeMode: true,
    spaceBetween: 20,
    speed: 1000,
    watchSlidesProgress: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".electronic-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 1.8,
        },
        768: {
            slidesPerView: 2.4,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 1.3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 2.2,
        },
    },
});
var swiper = new Swiper(".fashion-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});

var electronicMain = new Swiper(".electronic-main", {
    spaceBetween: 10,
    effect: "fade",
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: electronic,
    },
});
const sliders = document.querySelectorAll(".product-slider");
sliders.forEach((slider, index) => {
    new Swiper(slider, {
        loop: true,
        slidesPerView: 1,
        pagination: {
            el: `.product-pagination-${index + 1}`,
            clickable: true,
        },
    });
});
var bestDealProduct = new Swiper(".best-deal-product", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1400: {
            slidesPerView: 3,
        },
    },
});
var shopOfferBanner = new Swiper(".shop-offer-banner", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
});
var quickSlider2 = new Swiper(".quick-slider-2", {
    loop: true,
    spaceBetween: 18,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        350: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        490: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
    },
});
var quickSlider = new Swiper(".quick-slider", {
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    thumbs: {
        swiper: quickSlider2,
    },
});


var recentViewSlider = new Swiper(".recent-view-slider", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    speed: 1000,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

var recentViewSlider2 = new Swiper(".recent-view-slider-2", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    freeMode: true,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        470: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var categorySlider = new Swiper(".category-slider", {
    slidesPerView: 8,
    freeMode: true,
    speed: 1000,
    spaceBetween: 25,
    navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        430: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 6,
        },
        1400: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
    },
});

var categorySlider2 = new Swiper(".category-slider-2", {
    slidesPerView: 6,
    loop: true,
    freeMode: true,
    speed: 1000,
    spaceBetween: 25,
    navigation: {
        nextEl: ".category-slider-next",
        prevEl: ".category-slider-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        430: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },
});

var blogSlider = new Swiper(".blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var similarProductSlider = new Swiper(".similar-product-slider", {
    slidesPerView: 4,
    freeMode: true,
    spaceBetween: 20,
    loop: true,
});

var recentlyViewSlider = new Swiper(".recently-view-slider", {
    slidesPerView: 4,
    freeMode: true,
    spaceBetween: 20,
});

var productFullSlider = new Swiper(".product-full-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    speed: 1000,
    loop: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

var productThumbSlider = new Swiper(".product-thumb-slider", {
    spaceBetween: 12,
    slidesPerView: 4,
    loop: true,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        430: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 4,
        },
    },
});
var productMainSlider = new Swiper(".product-main-slider", {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    thumbs: {
        swiper: productThumbSlider,
    },
});

var productMainSliderElement = document.querySelector('.product-main-slider');
if (productMainSliderElement) {
    productMainSliderElement.addEventListener('mouseenter', function () {
        productMainSlider.autoplay.stop();
    });

    productMainSliderElement.addEventListener('mouseleave', function () {
        productMainSlider.autoplay.start();
    });
}

document.querySelectorAll('.product-thumb-slider .swiper-slide').forEach(function (slide) {
    slide.addEventListener('mouseenter', function () {
        var index = this.getAttribute('data-swiper-slide-index');
        if (index !== null) {
            productMainSlider.slideToLoop(parseInt(index));
        }
    });
});

var successStorySlider = new Swiper(".success-story-slider", {
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var testimonialSlider2 = new Swiper(".testimonial-slider-2", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

var comingSoonSlider = new Swiper(".coming-soon-slider, .authentication-slider", {
    speed: 1000,
    watchSlidesProgress: true,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var menuCategorySlider = new Swiper(".menu-category-slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 1000,
    loop: true,
    watchSlidesProgress: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 4,
        },
        1400: {
            slidesPerView: 4,
        },
    },
});

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".product-box-7 .product-slider");

    sliders.forEach((sliderEl) => {
        if (sliderEl.swiper) {
            sliderEl.swiper.destroy(true, true);
        }

        const box = sliderEl.closest(".product-box-7");

        const paginationEl = box.querySelector(".product-pagination");

        const swiper = new Swiper(sliderEl, {
            slidesPerView: 1,
            loop: true,
            speed: 1000,
            effect: "fade",
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            pagination: {
                el: paginationEl,
                clickable: true,
            },
        });

        swiper.autoplay.stop();

        box.addEventListener("mouseenter", () => {
            swiper.autoplay.start();
        });

        box.addEventListener("mouseleave", () => {
            swiper.autoplay.stop();
            swiper.slideTo(0);
        });
    });
});

var bannerSwiper = new Swiper(".banner-swiper", {
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".home-pagination",
  },
});

new Swiper(".text-swiper", {
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 2166,
    disableOnInteraction: false,
  },
  speed: 600,
  allowTouchMove: false,
});
