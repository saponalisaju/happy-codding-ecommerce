<template>
    <section class="slider-banner sb-space">
        <div class="title-2 sb-space">
            <h4 class="text-center">Serenity Classic Smart Watch</h4>
            <p class="text-center">
                Our luxury collection is not only about indulgence but also about making responsible choices.
            </p>
        </div>

        <div class="container">
            <div class="row align-items-center g-sm-4 g-3">

                <!-- LEFT -->
                <div class="col-lg-3 order-lg-1 order-3">
                    <div class="row gy-xxl-5 gy-xl-4 gy-md-3 g-2 banner-list">

                        <div class="col-lg-6 col-md-3 col-6 p-0" v-for="i in 4" :key="i">
                            <div class="img-box">
                                <svg>
                                    <use :href="`/assets/svg/sprite_icon.svg#watch`"></use>
                                </svg>
                            </div>
                            <h5 class="name">Watch Strap</h5>
                            <p>Alligator leather</p>
                        </div>

                    </div>
                </div>

                <!-- CENTER SWIPER (FIXED RESPONSIVE) -->
                <div class="col-lg-6 col-sm-8 order-lg-2 order-1">

                    <div class="swiper classic-watch">

                        <div class="swiper-wrapper">

                            <div class="swiper-slide" v-for="i in 3" :key="i">
                                <img
                                    class="img-fluid watch-main-img"
                                    :src="`/assets/images/product/watch/${i === 1 ? 11 : i}.png`"
                                    alt="watch"
                                />
                            </div>

                        </div>

                        <div class="swiper-pagination style-1"></div>
                    </div>

                </div>

                <!-- RIGHT THUMBS -->
                <div class="col-lg-3 col-sm-4 order-lg-3 order-2">

                    <div class="swiper classic-watch-box">

                        <div class="swiper-wrapper">

                            <div class="swiper-slide" v-for="i in 3" :key="i">

                                <div class="product-box style-4">

                                    <div class="product-img-box">

                                        <a href="#" class="product-img">
                                            <img
                                                class="img-fluid thumb-img"
                                                :src="`/assets/images/product/watch/${i + 1}.png`"
                                                alt=""
                                            />
                                        </a>

                                    </div>

                                    <div class="product-details">
                                        <a href="#" class="name">Eclipse Chrono</a>
                                        <h6>${{ 620 + i * 10 }}</h6>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<style scoped>

/* 🔥 FIX 1: prevent image cut */
.watch-main-img {
    width: 100%;
    height: 100%;
    max-height: 420px;
    object-fit: contain;   /* IMPORTANT */
    display: block;
}

/* 🔥 FIX 2: swiper overflow issue */
.classic-watch,
.classic-watch-box {
    overflow: hidden;
    position: relative;
}

/* 🔥 FIX 3: prevent layout collapse */
.classic-watch .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* 🔥 FIX 4: thumb image fix */
.thumb-img {
    width: 100%;
    height: 100px;
    object-fit: contain;
}

/* 🔥 RESPONSIVE ONLY (NO DESIGN CHANGE) */
@media (max-width: 991px) {
    .watch-main-img {
        max-height: 320px;
    }
}

@media (max-width: 576px) {
    .watch-main-img {
        max-height: 260px;
    }
}

</style>