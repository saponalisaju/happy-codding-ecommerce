/*====================
    Custom Light Gallery 2 JS
=======================*/
const lgStyle = document.createElement('style');
lgStyle.innerHTML = `
    .lg-outer .lg-thumb-item img {
        object-fit: contain !important;
        padding: 10px;
    }
`;
document.head.appendChild(lgStyle);


document.querySelectorAll('.review-images').forEach(gallery => {
    lightGallery(gallery, {
        selector: '.image-item',
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        counter: false
    });
});