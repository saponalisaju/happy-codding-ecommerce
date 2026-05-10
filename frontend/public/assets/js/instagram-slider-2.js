/*====================
    Instagram Slider 2 JS
=======================*/
const track = document.querySelector('.slider-track');
const slider = document.querySelector('.insta-slider');
let imgs = Array.from(track.querySelectorAll('img'));

imgs.forEach((img, i) => {
    const rotate = (i % 2 === 0) ? -2 : 2;
    const offsetY = (i % 2 === 0) ? -16 : 16;
    img.style.setProperty('--r', rotate + 'deg');
    img.style.setProperty('--y', offsetY + 'px');
});

track.innerHTML += track.innerHTML;
imgs = Array.from(track.querySelectorAll('img'));

let totalWidth = track.scrollWidth / 2;
let currentX = 0;
let velX = 0;
let isDragging = false;
let startX = 0;
let startPos = 0;
let animSpeed = 0.6;
let rafId;

function autoScroll() {
    if (!isDragging) {
        currentX -= animSpeed;
        gsap.set(track, {
            x: gsap.utils.wrap(-totalWidth, 0, currentX)
        });
    }
    rafId = requestAnimationFrame(autoScroll);
}
autoScroll();

slider.addEventListener("pointerdown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startPos = currentX;
    slider.style.cursor = "grabbing";
});

slider.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    currentX = startPos + dx;
    gsap.set(track, {
        x: gsap.utils.wrap(-totalWidth, 0, currentX)
    });
    velX = e.movementX;
});

slider.addEventListener("pointerup", () => {
    isDragging = false;
    slider.style.cursor = "grab";
    gsap.to(track, {
        x: "+=" + velX * 10,
        duration: 1.2,
        ease: "power2.out",
        onUpdate() {
            const matrix = new WebKitCSSMatrix(getComputedStyle(track).transform);
            currentX = matrix.m41;
            gsap.set(track, {
                x: gsap.utils.wrap(-totalWidth, 0, currentX)
            });
        }
    });
});

slider.addEventListener("pointerleave", () => {
    if (isDragging) {
        isDragging = false;
        slider.style.cursor = "grab";
    }
});