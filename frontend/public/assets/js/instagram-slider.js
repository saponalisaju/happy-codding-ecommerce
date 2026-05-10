/*====================
    Instagram Slider JS
=======================*/
const slidesElem = document.querySelector(".slides");
let imgs = gsap.utils.toArray(".slide img");

let index = 2;

function getConfig() {

    if (window.innerWidth <= 991) {
        return {
            limit: 1,
            active: {
                w: "100%",
                h: "auto",
                opacity: 1
            },
            near: {
                w: "100%",
                h: "auto",
                opacity: 1
            }
        };
    }

    if (window.innerWidth <= 1399) {
        return {
            limit: 1,
            active: {
                w: 430,
                h: "100%",
                opacity: 1
            },
            near: {
                w: 320,
                h: "100%",
                opacity: 1
            }
        };
    }

    return {
        limit: 2,
        active: {
            w: 430,
            h: 550,
            opacity: 1
        },
        near: {
            w: 350,
            h: 500,
            opacity: 1
        },
        far: {
            w: 260,
            h: 430,
            opacity: .9
        }
    };
}

function render() {

    const cfg = getConfig();

    imgs.forEach((img, i) => {

        const dist = Math.abs(i - index);

        let w = 0,
            h = 0,
            opacity = 0,
            pointer = "none";

        if (dist === 0) {
            w = cfg.active.w;
            h = cfg.active.h;
            opacity = 1;
            pointer = "auto";
        } else if (dist === 1 && cfg.limit >= 1) {
            w = cfg.near.w;
            h = cfg.near.h;
            opacity = 1;
            pointer = "auto";
        } else if (dist === 2 && cfg.limit === 2) {
            w = cfg.far.w;
            h = cfg.far.h;
            opacity = cfg.far.opacity;
        }

        gsap.to(img, {
            width: w,
            height: h,
            opacity: opacity,
            duration: .45,
            ease: "power3.out"
        });

        img.style.pointerEvents = pointer;

        const parentLi = img.closest("div");

        if (w === 0 || h === 0) {
            parentLi.style.display = "none";
        } else {
            parentLi.style.display = "";
        }

    });
}

function realNext() {
    slidesElem.appendChild(slidesElem.firstElementChild);
    imgs = gsap.utils.toArray(".slide img");
    render();
}

function realPrev() {
    slidesElem.insertBefore(
        slidesElem.lastElementChild,
        slidesElem.firstElementChild
    );
    imgs = gsap.utils.toArray(".slide img");
    render();
}

Draggable.create(".slides", {
    type: "x",
    inertia: true,
    onDragEnd() {
        if (this.deltaX < -20) realNext();
        if (this.deltaX > 20) realPrev();
        gsap.to(".slides", {
            x: 0,
            duration: .3
        });
    }
});

setInterval(realNext, 2000);

window.addEventListener("resize", render);

render();