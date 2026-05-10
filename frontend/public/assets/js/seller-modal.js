/*====================
    Seller Modal JS
=======================*/
const contactSellerModal = document.getElementById('contactSellerModal');
if (contactSellerModal) {
    contactSellerModal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const sellerName = button.getAttribute('data-seller-name');
        const modalBodyInput = contactSellerModal.querySelector('.modal-body #modal-seller-name');

        modalBodyInput.value = sellerName;
    });
}