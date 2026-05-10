/*-----------------------------------------------------------------------------------

 Template Name: Hazy - Multi-purpose E-commerce HTML Template
 Template URI: themes.pixelstrap.com/hazy
 Description: This is E-commerce website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

-----------------------------------------------------------------------------------

01. Page Loader Js
02. Ratio Js
03. Header Close Btn & Overlay Js
04. Form Validation Js
05. Password Hide/Show Js
06. Header Sticky Js
07. Product Counter Js
08. Page Load inline CSS Timer Js
09. Footer Js
10. Color box Js
11. Product Timer Js
12. Color Active Js
13. Quantity Js
14. Size Box Js
15. cart-offcanvas price, qty, and variant-main-box active class Js
16. wishlist-offcanvas delete and no-wishlist display Js
17. Navbar Menu Toggle Js
18. Quick View Modal Swiper Js
19. Quick View Modal Counter Js
20. Recently Purchased Js
21. Tap to Top Js
22. Cookie Bar Js
23. Newsletter Modal Js
24. Exit Intent Modal Js
25. Copy Link Js
26. Common Quantity Counter Js
27. Navbar Dropdown Toggle Js
28. Title Change on Tab Switch JS
29. PWA Service Worker Registration
30. PWA Install Prompt JS
*/
const REMOTE_ASSET_PREFIX = "https://themes.pixelstrap.net/hazy/assets/";
const LOCAL_ASSET_PREFIX = "../assets/";

function getLocalAssetUrl(value) {
    if (typeof value !== "string" || !value.startsWith(REMOTE_ASSET_PREFIX)) {
        return null;
    }

    return LOCAL_ASSET_PREFIX + value.slice(REMOTE_ASSET_PREFIX.length);
}

function rewriteMirroredAssetUrls() {
    document.querySelectorAll("[src], [href], [poster], use").forEach((element) => {
        ["src", "href", "poster"].forEach((attribute) => {
            const value = element.getAttribute(attribute);
            const localValue = getLocalAssetUrl(value);

            if (localValue) {
                element.setAttribute(attribute, localValue);
            }
        });

        const namespacedHref = element.getAttributeNS("http://www.w3.org/1999/xlink", "href") ||
            element.getAttribute("xlink:href");
        const localNamespacedHref = getLocalAssetUrl(namespacedHref);

        if (localNamespacedHref) {
            element.setAttribute("href", localNamespacedHref);
            element.setAttribute("xlink:href", localNamespacedHref);
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    rewriteMirroredAssetUrls();
});

/*====================
    01. Page Loader JS
=======================*/
window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        var loader = document.getElementById('pageLoader');
        if (loader) {
            loader.style.transition = 'opacity 0.5s';
            loader.style.opacity = '0';
            setTimeout(function () {
                loader.style.display = 'none';
            }, 500);
        }
    }, 3000);
});

/*====================
    02. Ratio js
=======================*/
window.addEventListener("load", () => {
    const bgImg = document.querySelectorAll(".bg-img");
    for (let i = 0; i < bgImg.length; i++) {
        let bgImgEl = bgImg[i];

        if (bgImgEl.classList.contains("bg-top")) {
            bgImgEl.parentNode.classList.add("b-top");
        } else if (bgImgEl.classList.contains("bg-bottom")) {
            bgImgEl.parentNode.classList.add("b-bottom");
        } else if (bgImgEl.classList.contains("bg-center")) {
            bgImgEl.parentNode.classList.add("b-center");
        } else if (bgImgEl.classList.contains("bg-left")) {
            bgImgEl.parentNode.classList.add("b-left");
        } else if (bgImgEl.classList.contains("bg-right")) {
            bgImgEl.parentNode.classList.add("b-right");
        }

        if (bgImgEl.classList.contains("blur-up")) {
            bgImgEl.parentNode.classList.add("blur-up", "lazyload");
        }

        if (bgImgEl.classList.contains("bg_size_content")) {
            bgImgEl.parentNode.classList.add("b_size_content");
        }

        bgImgEl.parentNode.classList.add("bg-size");
        const bgSrc = bgImgEl.src;
        bgImgEl.style.display = "none";
        bgImgEl.parentNode.setAttribute(
            "style",
            `
      background-image: url(${bgSrc});
      background-size:cover;
      background-position: center;
      background-repeat: no-repeat;
      display: block;
      `
        );
    }
});

/*====================
    03. Header Close Btn & Overlay JS
=======================*/
document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarSupportedContent");
    const bgOverlay = document.querySelector(".navbar-overlay");
    const closeBtn = document.querySelector(".side-menu-header .close-btn");

    if (navbarCollapse && bgOverlay) {
        navbarCollapse.addEventListener("show.bs.collapse", function () {
            bgOverlay.classList.add("show");
        });

        navbarCollapse.addEventListener("hide.bs.collapse", function () {
            bgOverlay.classList.remove("show");
        });
    }

    if (closeBtn && navbarCollapse) {
        closeBtn.addEventListener("click", function () {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    }

    if (bgOverlay && navbarCollapse) {
        bgOverlay.addEventListener("click", function () {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        });
    }
});

/*====================
    04. Form Validation JS
=======================*/
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

/*====================
  05. Password Hide/Show JS
=======================*/
document.querySelectorAll(".password-toggle").forEach((toggle) => {
    toggle.addEventListener("click", function () {
        const input = this.parentElement.querySelector("input");
        if (input.dataset.passwordSet === undefined) {
            input.dataset.passwordSet = "true";
        }

        if (input.type === "password") {
            input.type = "text";
            this.classList.replace("ri-eye-line", "ri-eye-off-line");
        } else {
            input.type = "password";
            this.classList.replace("ri-eye-off-line", "ri-eye-line");
        }
    });
});

/*====================
    06. Header Sticky JS
=======================*/
window.onscroll = function () {
    var header = document.querySelector("header");
    if (window.pageYOffset > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};

/*====================
    07. Product Counter JS
=======================*/
document.querySelectorAll(".product").forEach(product => {
    let count = 1;

    const addBtn = product.querySelector(".add-btn");
    const counter = product.querySelector(".counter");
    const countDisplay = product.querySelector(".count");
    const inc = product.querySelector(".increment");
    const dec = product.querySelector(".decrement");

    const decIcon = product.querySelector(".decrement i");

    const toggleCounter = action => {
        if (action === "show") {
            addBtn.style.display = "none";
            counter.style.display = "flex";
        } else {
            addBtn.style.display = "flex";
            counter.style.display = "none";
            count = 1;
            countDisplay.textContent = "01";
            updateIcon();
        }
    };

    const updateIcon = () => {
        if (!decIcon) return;
        decIcon.className = count === 1 ?
            "ri-delete-bin-line" :
            "ri-subtract-line";
    };

    const updateCount = change => {

        if (count === 1 && change < 0) {
            toggleCounter("hide");
            return;
        }

        count += change;
        countDisplay.textContent = count.toString().padStart(2, "0");
        updateIcon();
    };

    addBtn.addEventListener("click", () => toggleCounter("show"));
    inc.addEventListener("click", () => updateCount(1));
    dec.addEventListener("click", () => updateCount(-1));

    updateIcon();
});

/*====================
    08. Page Load inline CSS Timer JS
=======================*/
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelectorAll(".product").forEach(product => {
            const addBtn = product.querySelector(".add-btn");
            const counter = product.querySelector(".counter");

            addBtn.style.display = "flex";
            counter.style.display = "none";
        });
    }, 0);
});

/*====================
    09 Footer JS
=======================*/
document.querySelectorAll(".footer-section .footer-title").forEach(heading => {
    heading.addEventListener("click", function () {
        if (window.innerWidth <= 575) {
            this.classList.toggle("active");
            const nav = this.nextElementSibling;
            if (nav && nav.classList.contains("footer-nav-list")) {
                nav.classList.toggle("active");
            }
        }
    });
});

/*====================
    10. Color box JS
=======================*/
var colorItems = document.querySelectorAll(".color-variant li");
colorItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
        colorItems.forEach(function (colorItem) {
            colorItem.classList.remove("active");
        });
        this.classList.add("active");
    });
});

/*====================
    11. Product Timer JS
=======================*/
document.querySelectorAll(".dropdown-category a").forEach(function (paragraph) {
    paragraph.addEventListener("click", function () {
        document.querySelectorAll(".dropdown-category a").forEach(function (p) {
            if (p !== paragraph) {
                p.classList.remove("active");
            }
        });

        paragraph.classList.toggle("active");
    });
});

/*====================
    12. Color Active JS
=======================*/
document.addEventListener("DOMContentLoaded", () => {
    const allColorLists = document.querySelectorAll(".color-filter");
    allColorLists.forEach(list => {
        const colorItems = list.querySelectorAll("li");
        colorItems.forEach(item => {
            item.addEventListener("click", () => {
                colorItems.forEach(li => li.classList.remove("active"));
                item.classList.add("active");
            });
        });
    });
});

/* =================
    13. Quantity JS
===================*/
document.querySelectorAll(".quantity-btn").forEach(button => {
    button.addEventListener("click", function () {
        const input = this.parentElement.querySelector(".quantity-input");
        let value = parseInt(input.value, 10);

        if (this.textContent === "+") {
            value++;
        } else if (this.textContent === "-" && value > 1) {
            value--;
        }

        input.value = value;
    });
});

/*==================
    14. Size Box JS
===================*/
document.addEventListener("DOMContentLoaded", function () {
    var sizeItems = document.querySelectorAll(".size-box ul li");
    sizeItems.forEach(function (item) {
        item.addEventListener("click", function (e) {
            console.log("Clicked on size item:", this);

            sizeItems.forEach(function (sizeItem) {
                sizeItem.classList.remove("active");
            });

            var selectSize = document.getElementById("selectSize");
            console.log("selectSize:", selectSize);

            if (selectSize) {
                selectSize.classList.remove("cartMove");
            } else {
                console.log("Element with id 'selectSize' not found.");
            }

            this.classList.add("active");
            this.parentNode.classList.add("selected");
        });
    });
});

/*=========================
    15. cart-offcanvas price, qty, and variant-main-box active class JS
=========================*/
document.querySelectorAll(".cart-offcanvas").forEach(cart => {

    const variantBoxes = cart.querySelectorAll(".variant-main-box");
    const productContents = cart.querySelectorAll(".product-content");
    const counters = cart.querySelectorAll(".counter");
    const editBtns = cart.querySelectorAll(".edit-btn, .done-btn");
    const deleteBtns = cart.querySelectorAll(".delete-btn");

    const basePrices = [];
    const baseDelPrices = [];
    const baseOfferPrices = [];


    function updateTotal(cart) {
        let total = 0;
        cart.querySelectorAll(".cart-product-box .price").forEach(priceBox => {
            let val = priceBox.childNodes[0].textContent.replace("$", "").trim();
            if (val) total += parseFloat(val);
        });

        let addBtnSpan = cart.querySelector(".total-price-box .checkout-btn span");
        if (addBtnSpan) {
            addBtnSpan.textContent = `$${total.toFixed(2)}`;
        }
    }

    function checkNoCart(cart) {
        let productListItems = cart.querySelectorAll(".cart-product-box .product-list li");
        let noCartBox = cart.querySelector(".cart-product-box .no-cart");

        if (!noCartBox) return;

        if (productListItems.length === 0) {
            noCartBox.style.display = "flex";
        } else {
            noCartBox.style.display = "none";
        }
    }


    productContents.forEach(pc => {
        let priceBox = pc.querySelector(".price");
        let offerBox = pc.querySelector(".offer");

        if (priceBox) {
            let mainPrice = parseFloat(priceBox.childNodes[0].textContent.replace('$', ''));
            let delPrice = priceBox.querySelector("del") ?
                parseFloat(priceBox.querySelector("del").textContent.replace('$', '')) :
                0;

            basePrices.push(mainPrice);
            baseDelPrices.push(delPrice);

            if (offerBox) {
                let offValue = parseFloat(offerBox.textContent.replace('$', ''));
                baseOfferPrices.push(offValue);
            } else {
                baseOfferPrices.push(0);
            }

        } else {
            basePrices.push(0);
            baseDelPrices.push(0);
            baseOfferPrices.push(0);
        }
    });


    productContents.forEach((pc, i) => {
        let span = pc.querySelector("h3 span");
        if (span) {
            let qty = span.textContent.replace("X", "").trim();
            let counter = counters[i];
            if (counter) counter.querySelector(".count").textContent = qty.toString().padStart(
                2, "0");
        }
    });

    updateTotal(cart);
    checkNoCart(cart);


    function syncCounterWithSpan(i) {
        let pc = productContents[i];
        let span = pc.querySelector("h3 span");
        if (!span) return;

        let qty = span.textContent.replace("X", "").trim();
        let counter = counters[i];
        if (counter) counter.querySelector(".count").textContent = qty.toString().padStart(2, "0");
    }


    editBtns.forEach((btn, i) => {
        btn.addEventListener("click", () => {

            if (btn.classList.contains("edit-btn")) {
                variantBoxes[i].classList.add("active");
                syncCounterWithSpan(i);
                btn.classList.remove("edit-btn");
                btn.classList.add("done-btn");
                btn.innerHTML = `<i class="ri-check-line"></i>`;
            } else {
                variantBoxes[i].classList.remove("active");
                syncCounterWithSpan(i);
                btn.classList.remove("done-btn");
                btn.classList.add("edit-btn");
                btn.innerHTML = `<i class="ri-pencil-line"></i>`;
            }

            updateTotal(cart);
        });
    });


    counters.forEach((counter, counterIndex) => {

        let countEl = counter.querySelector(".count");
        let increment = counter.querySelector(".increment");
        let decrement = counter.querySelector(".decrement");

        function updateToProduct() {

            let pc = productContents[counterIndex];
            if (!pc) return;

            let targetSpan = pc.querySelector("h3 span");
            if (targetSpan) targetSpan.textContent = "X" + countEl.textContent;

            let priceBox = pc.querySelector(".price");
            if (priceBox) {
                let qty = parseInt(countEl.textContent, 10);

                let minus = baseOfferPrices[counterIndex] * qty;

                let newMain = ((basePrices[counterIndex] * qty) - minus).toFixed(2);
                let newDel = ((baseDelPrices[counterIndex] * qty) - minus).toFixed(2);

                priceBox.childNodes[0].textContent = `$${newMain} `;

                let delEl = priceBox.querySelector("del");
                if (delEl) delEl.textContent = `$${newDel}`;
            }

            updateTotal(cart);
        }

        increment.addEventListener("click", () => {
            let num = parseInt(countEl.textContent, 10) + 1;
            countEl.textContent = num.toString().padStart(2, "0");
            updateToProduct();
        });

        decrement.addEventListener("click", () => {
            let num = parseInt(countEl.textContent, 10);
            if (num > 1) num--;
            countEl.textContent = num.toString().padStart(2, "0");
            updateToProduct();
        });
    });


    deleteBtns.forEach((delBtn, i) => {
        delBtn.addEventListener("click", () => {

            let li = variantBoxes[i].closest("li");

            if (li) {
                li.remove();
            }

            updateTotal(cart);
            checkNoCart(cart);
        });
    });
});

/*=========================
    16. wishlist-offcanvas delete and no-wishlist display JS
=========================*/
document.querySelectorAll(".wishlist-offcanvas").forEach(wishlist => {
    const deleteBtns = wishlist.querySelectorAll(".delete-button");
    const noWishlist = wishlist.querySelector(".no-wishlist");

    function checkEmpty() {
        const productLists = wishlist.querySelectorAll(".product-list");
        if (productLists.length === 0) {
            if (noWishlist) noWishlist.style.display = "grid";
        } else {
            if (noWishlist) noWishlist.style.display = "none";
        }
    }

    deleteBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const productList = btn.closest(".product-list");
            if (productList) {
                productList.remove();
                checkEmpty();
            }
        });
    });

    checkEmpty();
});

/*====================
    17. Navbar Menu Toggle JS
=======================*/
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.querySelector(".overlay");
    const body = document.querySelector("body");
    const menuBtn = document.querySelector(".menu-btn");
    const menuItems = document.querySelector(".menu-items");
    const expandBtn = document.querySelectorAll(".expand-btn");

    if (menuBtn && menuItems) {
        function toggle() {
            body.classList.toggle("overflow");
            if (overlay) overlay.classList.toggle("overlay--active");
            menuBtn.classList.toggle("open");
            menuItems.classList.toggle("open");
        }

        menuBtn.addEventListener("click", e => {
            e.stopPropagation();
            toggle();
        });

        window.onkeydown = function (event) {
            const key = event.key;
            const active = menuItems.classList.contains('open');
            if (key === "Escape" && active) {
                toggle();
            }
        };

        document.addEventListener('click', e => {
            let target = e.target,
                its_menu = target === menuItems || menuItems.contains(target),
                its_hamburger = target === menuBtn || menuBtn.contains(target),
                menu_is_active = menuItems.classList.contains('open');

            if (!its_menu && !its_hamburger && menu_is_active) {
                toggle();
            }
        });

        expandBtn.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                if (window.innerWidth <= 1024) {
                    btn.classList.toggle("open");
                }
            });
        });
    }
});

/*====================
    18. Quick View Modal Swiper Update
=======================*/
document.addEventListener("DOMContentLoaded", function () {
    var quickViewModal = document.getElementById('quickViewModal');
    if (quickViewModal) {
        quickViewModal.addEventListener('shown.bs.modal', function () {
            if (typeof quickSlider !== 'undefined' && quickSlider) {
                quickSlider.update();
            }
            if (typeof quickSlider2 !== 'undefined' && quickSlider2) {
                quickSlider2.update();
            }
        });
    }
});

/*====================
    19. Quick View Modal Counter JS
=======================*/
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector('.quick-view-modal');
    if (modal) {
        const counter = modal.querySelector('.counter');
        if (counter) {
            const decrementBtn = counter.querySelector(".decrement");
            const incrementBtn = counter.querySelector(".increment");
            const countSpan = counter.querySelector(".count");

            if (decrementBtn && incrementBtn && countSpan) {
                decrementBtn.addEventListener("click", function () {
                    let currentCount = parseInt(countSpan.textContent, 10);
                    if (currentCount > 1) {
                        countSpan.textContent = (currentCount - 1).toString().padStart(2, '0');
                    }
                });

                incrementBtn.addEventListener("click", function () {
                    let currentCount = parseInt(countSpan.textContent, 10);
                    countSpan.textContent = (currentCount + 1).toString().padStart(2, '0');
                });
            }
        }
    }
});

/*====================
    20. Recently Purchased JS
=======================*/
const recentProducts = [{
    name: "Pro Series Smart Watch 5",
    image: "../assets/images/product/watch/1.png",
    time: "Just now",
    price: "$120.00",
    oldPrice: "$150.00"
},
{
    name: "Wireless Noise Cancelling Headphones",
    image: "../assets/images/product/electronic/1-1.png",
    time: "2 minutes ago",
    price: "$249.00",
    oldPrice: "$299.00"
},
{
    name: "Professional Running Shoes Pro",
    image: "../assets/images/product/shoes/2.png",
    time: "5 minutes ago",
    price: "$120.00",
    oldPrice: "$140.00"
},
{
    name: "Premium Leather Travel Bag",
    image: "../assets/images/product/bag/3.png",
    time: "12 minutes ago",
    price: "$85.00",
    oldPrice: "$110.00"
},
{
    name: "Ultra Slim 10-inch Tablet",
    image: "../assets/images/product/electronic/4-1.png",
    time: "27 minutes ago",
    price: "$399.00",
    oldPrice: "$450.00"
}
];

/* Modern CSS for the notification */
function createNotification() {
    const box = document.createElement('div');
    box.className = 'recently-purchased-box';
    box.id = 'recent-purchase-notification';
    document.body.appendChild(box);
    return box;
}

const notificationBox = createNotification();
let currentIndex = 0;
let timeoutId;

function showNextProduct() {
    const product = recentProducts[currentIndex];

    notificationBox.innerHTML = `
        <button class="close-btn" onclick="closeNotification()">
            <i class="ri-close-line"></i>
        </button>
        <a href="product-page(left-thumbnail).html" class="product-image">
            <img src="${product.image}" alt="${product.name}">
        </a>
        <div class="product-info">
            <div>
                <a href="product-page(left-thumbnail).html" class="product-name">${product.name}</a>
                <h6 class="product-price">${product.price} <del>${product.oldPrice}</del></h6>
            </div>
            <span class="time-ago">${product.time}</span>
        </div>
        <div class="progress-box">
            <div class="progress-bar"></div>
        </div>
    `;

    setTimeout(() => {
        notificationBox.classList.add('show');
    }, 100);

    currentIndex = (currentIndex + 1) % recentProducts.length;
}

notificationBox.addEventListener('animationend', (e) => {
    if (e.target.classList.contains('progress-bar')) {
        hideNotification();
    }
});

function hideNotification() {
    notificationBox.classList.remove('show');

    setTimeout(() => {
        const nextInterval = Math.floor(Math.random() * 10000) + 10000;
        timeoutId = setTimeout(showNextProduct, nextInterval);
    }, 500);
}

function closeNotification() {
    clearTimeout(timeoutId);
    hideNotification();
}

setTimeout(showNextProduct, 5000);

window.closeNotification = closeNotification;

/*====================
    21. Tap to Top JS
=======================*/
const tapToTop = document.querySelector(".tap-to-top");
const progressPath = document.querySelector(".tap-to-top .progress-path");

if (tapToTop && progressPath) {
    const pathLength = progressPath.getTotalLength();
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;

    const updateProgress = () => {
        const scroll = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;

        if (scroll > 600) {
            tapToTop.classList.add("show");
        } else {
            tapToTop.classList.remove("show");
        }
    };

    window.addEventListener("scroll", updateProgress);

    tapToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    updateProgress();
}
/*====================
    22. Cookie Bar JS
=======================*/
window.addEventListener('load', function () {
    setTimeout(function () {
        var cookieBox = document.querySelector('.cookie-bar-box');
        if (cookieBox) cookieBox.classList.add('show');
    }, 2000);
});

function hideCookieBar() {
    var cookieBox = document.querySelector('.cookie-bar-box');
    if (cookieBox) cookieBox.classList.remove('show');
}

/*====================
    23. Newsletter Modal JS
========================**/
window.addEventListener('load', function () {
    const newsletterModal = document.getElementById('newsletterModal');
    if (!newsletterModal) return;

    const bsNewsletterModal = new bootstrap.Modal(newsletterModal);
    const newsletterNoShowCheckbox = document.getElementById('newsletter-no-show');

    if (localStorage.getItem('newsletter-no-show') !== 'true') {
        setTimeout(function () {
            bsNewsletterModal.show();
        }, 0);
    }

    if (newsletterNoShowCheckbox) {
        newsletterNoShowCheckbox.addEventListener('change', function () {
            if (this.checked) {
                localStorage.setItem('newsletter-no-show', 'true');
            } else {
                localStorage.removeItem('newsletter-no-show');
            }
        });
    }
});

/*====================
    24. Exit Intent Modal JS
========================**/
window.addEventListener('load', function () {
    const exitModal = document.getElementById('exitModal');
    if (!exitModal) return;

    const bsExitModal = new bootstrap.Modal(exitModal);
    const exitNoShowCheckbox = document.getElementById('exit-no-show');
    let modalShown = false;

    document.addEventListener('mouseleave', function (e) {
        if (e.clientY < 0 && !modalShown) {
            if (localStorage.getItem('exit-no-show') === 'true') return;

            const newsletterModal = document.getElementById('newsletterModal');
            if (newsletterModal && newsletterModal.classList.contains('show')) return;

            bsExitModal.show();
            modalShown = true;
            startExitCountdown(10);
        }
    });

    if (exitNoShowCheckbox) {
        exitNoShowCheckbox.addEventListener('change', function () {
            if (this.checked) {
                localStorage.setItem('exit-no-show', 'true');
            } else {
                localStorage.removeItem('exit-no-show');
            }
        });
    }

    function startExitCountdown(durationInMinutes) {
        let timer = durationInMinutes * 60;
        const interval = setInterval(function () {
            let minutes = Math.floor(timer / 60);
            let seconds = timer % 60;

            const min1 = Math.floor(minutes / 10);
            const min2 = minutes % 10;
            const sec1 = Math.floor(seconds / 10);
            const sec2 = seconds % 10;

            if (document.getElementById('exit-min-1')) document.getElementById('exit-min-1').textContent = min1;
            if (document.getElementById('exit-min-2')) document.getElementById('exit-min-2').textContent = min2;
            if (document.getElementById('exit-sec-1')) document.getElementById('exit-sec-1').textContent = sec1;
            if (document.getElementById('exit-sec-2')) document.getElementById('exit-sec-2').textContent = sec2;

            if (--timer < 0) {
                clearInterval(interval);
            }
        }, 1000);
    }
});

/*====================
    25. Copy Link JS
========================**/
function copyLink() {
    var copyText = document.getElementById("product-link");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var btn = document.querySelector(".copy-btn");
    var originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="ri-check-line"></i> Copied!';
    btn.classList.add("btn-success");

    setTimeout(function () {
        btn.innerHTML = originalContent;
    }, 2000);
}

/*====================
    26. Common Quantity Counter JS
=======================*/
document.addEventListener("DOMContentLoaded", function () {
    const initializeCounter = (counter) => {
        const decrementBtn = counter.querySelector(".decrement");
        const incrementBtn = counter.querySelector(".increment");
        const countSpan = counter.querySelector(".count");

        if (decrementBtn && incrementBtn && countSpan) {
            decrementBtn.onclick = function (e) {
                e.preventDefault();
                let currentCount = parseInt(countSpan.textContent, 10);
                if (currentCount > 1) {
                    countSpan.textContent = (currentCount - 1).toString().padStart(2, '0');
                }
            };

            incrementBtn.onclick = function (e) {
                e.preventDefault();
                let currentCount = parseInt(countSpan.textContent, 10);
                countSpan.textContent = (currentCount + 1).toString().padStart(2, '0');
            };
        }
    };

    document.querySelectorAll('.counter').forEach(initializeCounter);

    const body = document.querySelector('body');
    if (body) {
        body.addEventListener('shown.bs.modal', (e) => {
            e.target.querySelectorAll('.counter').forEach(initializeCounter);
        });
        body.addEventListener('shown.bs.offcanvas', (e) => {
            e.target.querySelectorAll('.counter').forEach(initializeCounter);
        });
    }
});

/*====================
    27. Navbar Dropdown Toggle JS
=======================*/
document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".navbar-nav .dropdown > .nav-link, .navbar-nav .dropdown .dropdown-menu .nav-item > a, .home-demo-menu .menu-col .menu-header");

    dropdownLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            if (window.innerWidth <= 991.98) {
                const parent = this.parentElement;
                const menu = parent.querySelector(":scope > .dropdown-menu, :scope > .mega-menu");

                if (menu) {
                    e.preventDefault();

                    const siblings = parent.parentElement.children;
                    for (let sibling of siblings) {
                        if (sibling !== parent) {
                            sibling.classList.remove("show");
                            const otherMenu = sibling.querySelector(":scope > .dropdown-menu,:scope > .mega-links, :scope > .mega-menu");
                            if (otherMenu) otherMenu.classList.remove("show");
                        }
                    }

                    parent.classList.toggle("show");
                    menu.classList.toggle("show");
                }
            }
        });
    });

    const menuHeaders = document.querySelectorAll(".navbar-nav .menu-col .menu-header");
    menuHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            if (window.innerWidth <= 991.98) {
                const parent = this.parentElement;
                const links = parent.querySelector(".mega-links");
                if (links) {
                    const siblings = parent.parentElement.children;
                    for (let sibling of siblings) {
                        const siblingCol = sibling.querySelector(".menu-col");
                        if (siblingCol && siblingCol !== parent) {
                            const siblingHeader = siblingCol.querySelector(".menu-header");
                            const siblingLinks = siblingCol.querySelector(".mega-links");
                            if (siblingHeader) siblingHeader.classList.remove("show");
                            if (siblingLinks) siblingLinks.classList.remove("show");
                        }
                    }

                    this.classList.toggle("show");
                    links.classList.toggle("show");
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdownLinks = document.querySelectorAll(".header-6 .navbar-nav .dropdown > .nav-link, .navbar-nav .dropdown .dropdown-menu .nav-item > a, .home-demo-menu .menu-col .menu-header");

    dropdownLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            const parent = this.parentElement;
            const menu = parent.querySelector(":scope > .dropdown-menu, :scope > .mega-menu, :scope > .mega-links");

            if (menu) {
                e.preventDefault();
                const siblings = parent.parentElement.children;
                for (let sibling of siblings) {
                    if (sibling !== parent) {
                        sibling.classList.remove("show");
                        const otherMenu = sibling.querySelector(":scope > .dropdown-menu, :scope > .mega-menu");
                        if (otherMenu) otherMenu.classList.remove("show");
                    }
                }

                parent.classList.toggle("show");
                menu.classList.toggle("show");
            }
        });
    });

    const menuHeaders = document.querySelectorAll(".navbar-nav .menu-col .menu-header");
    menuHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            if (window.innerWidth <= 991.98) {
                const parent = this.parentElement;
                const links = parent.querySelector(".mega-links");
                if (links) {
                    const siblings = parent.parentElement.children;
                    for (let sibling of siblings) {
                        const siblingCol = sibling.querySelector(".menu-col");
                        if (siblingCol && siblingCol !== parent) {
                            const siblingHeader = siblingCol.querySelector(".menu-header");
                            const siblingLinks = siblingCol.querySelector(".mega-links");
                            if (siblingHeader) siblingHeader.classList.remove("show");
                            if (siblingLinks) siblingLinks.classList.remove("show");
                        }
                    }

                    this.classList.toggle("show");
                    links.classList.toggle("show");
                }
            }
        });
    });
});

/*====================
    28. Title Change on Tab Switch JS
=======================*/
let originalTitle = document.title;
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "Come Back Soon! 🛍️";
    } else {
        document.title = originalTitle;
    }
});

/*====================
    29. PWA Service Worker Registration
=======================*/
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
        }).catch((error) => {
            console.log('Service Worker registration failed:', error);
        });
    });
}

/*====================
    30. PWA Install Prompt JS
=======================*/
let deferredPrompt;

const pwaInstallBox = document.createElement('div');
pwaInstallBox.className = 'pwa-install-app';
pwaInstallBox.innerHTML = `
    <div class="pwa-header">
        <div class="pwa-title">
            <img src="../assets/images/favicon/icon-192x192.png" alt="Hazy App">
            <div>
                <h5>Hazy App</h5>
                <p>E-commerce Shopping</p>
            </div>
        </div>
        </div>
    <div class="pwa-footer">
        <button class="btn-install">Install App</button>
        <button class="pwa-close"><i class="ri-close-line"></i></button>
    </div>
`;
document.body.appendChild(pwaInstallBox);

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('PWA Install prompt saved. Ready to install.');

    setTimeout(() => {
        pwaInstallBox.classList.add('show');
    }, 2000);
});

pwaInstallBox.querySelector('.pwa-close').addEventListener('click', () => {
    pwaInstallBox.classList.remove('show');
});

pwaInstallBox.querySelector('.btn-install').addEventListener('click', async () => {
    pwaInstallBox.classList.remove('show');

    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        deferredPrompt = null;
    }
});


/*====================
    31. Bottom sticky cart 
=======================*/
document.querySelectorAll('.qty-control').forEach(c => {
  const i = c.querySelector('input'), min = 1, max = 100;
  c.querySelector('.minus').onclick = () => i.value = Math.max(min, +i.value - 1);
  c.querySelector('.plus').onclick  = () => i.value = Math.min(max, +i.value + 1);
});
