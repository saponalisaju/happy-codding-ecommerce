<template>
    <!-- Cookie Bar Box Start -->
    <div v-if="showCookieBar" class="cookie-bar-box style-4">
        <div class="cookie-content">
            <div class="cookie-icon">
                <i class="ri-information-line"></i>
            </div>

            <div class="cookie-text">
                <p>
                    We use cookies to enhance your user experience.
                    By continuing to visit this site, you agree to our
                    <a href="privacy-policy.html">use of cookies.</a>
                </p>
            </div>
        </div>

        <div class="cookie-btns">
            <button class="btn-accept" @click="acceptCookies">
                Accept Cookies
            </button>

            <button class="btn-close" @click="hideCookieBar">
                <i class="ri-close-line"></i>
            </button>
        </div>
    </div>
    <!-- Cookie Bar Box End -->
</template>

<script>
export default {
    data() {
        return {
            showCookieBar: true,
        };
    },

    mounted() {
        const cookieAccepted = localStorage.getItem("cookieAccepted");

        if (cookieAccepted === "true") {
            this.showCookieBar = false;
        }
    },

    methods: {
        acceptCookies() {
            localStorage.setItem("cookieAccepted", "true");
            this.showCookieBar = false;
        },

        hideCookieBar() {
            this.showCookieBar = false;
        },
    },
};
</script>