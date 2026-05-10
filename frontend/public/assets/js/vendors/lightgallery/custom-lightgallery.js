/*====================
    Custom Light Gallery JS
=======================*/
const lgContainer = document.getElementById('lightgallery');
if (lgContainer) {
    lightGallery(lgContainer, {
        selector: '.grid-item',
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        counter: false
    });
}

const mediaGallery = document.getElementById('media-gallery');
if (mediaGallery) {
    lightGallery(mediaGallery, {
        selector: '.media-box',
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        counter: false
    });
}

const productLightGallery = document.getElementById('lightgallery-product');
if (productLightGallery) {
    lightGallery(productLightGallery, {
        selector: '.lightbox-image',
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        counter: false
    });
}