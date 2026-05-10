/*====================
    Bundle Count Price JS
=======================*/
document.addEventListener("DOMContentLoaded", function () {
    const bundleCheckboxes = document.querySelectorAll('.bundle-checkbox');
    const totalDisplay = document.getElementById('bundle-total-price-modern');
    const productCards = document.querySelectorAll('.bundle-product-card.modern');

    if (bundleCheckboxes.length > 0 && totalDisplay) {

        const updateBundleState = () => {
            let total = 0;
            let count = 0;

            bundleCheckboxes.forEach(checkbox => {
                const parentRow = checkbox.closest('.summary-row');
                const refId = parentRow ? parentRow.getAttribute('data-ref') : null;

                if (checkbox.checked) {
                    total += parseFloat(checkbox.value);
                    count++;

                    if (refId) {
                        const card = document.querySelector(`.bundle-product-card[data-id="${refId}"]`);
                        if (card) card.classList.add('active');
                    }
                } else {
                    if (refId) {
                        const card = document.querySelector(`.bundle-product-card[data-id="${refId}"]`);
                        if (card) card.classList.remove('active');
                    }
                }
            });

            totalDisplay.textContent = `$${total.toFixed(2)}`;
        };

        bundleCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateBundleState);
        });

        productCards.forEach(card => {
            card.addEventListener('click', function () {
                const id = this.getAttribute('data-id');
                const checkboxRow = document.querySelector(`.summary-row[data-ref="${id}"]`);
                if (checkboxRow) {
                    const checkbox = checkboxRow.querySelector('.bundle-checkbox');
                    if (checkbox) {
                        checkbox.checked = !checkbox.checked;
                        updateBundleState();
                    }
                }
            });
        });

        updateBundleState();
    }
});