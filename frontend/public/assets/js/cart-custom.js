/*====================
    Cart Custom JS
=======================*/
document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.querySelector('.cart-table');
    if (!cartTable) return;

    // ----------------------
    // Helper Functions
    // ----------------------
    const parseQty = (value) => parseInt(value, 10) || 1; // Always use radix 10
    const parsePrice = (text) => parseFloat(text.replace(/[^0-9.]/g, '')) || 0;

    const updateRowTotal = (row, quantity) => {
        const priceCell = row.querySelector('td:nth-child(2) h5');
        const unitPrice = parsePrice(priceCell.childNodes[0].textContent.trim());
        const totalCell = row.querySelector('td:nth-child(4)');
        const totalPrice = unitPrice * quantity;

        totalCell.textContent = '$' + totalPrice.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        updateCartSummary();
    };

    const updateCartSummary = () => {
        let totalItems = 0, totalMRP = 0, grandTotal = 0;
        const rows = document.querySelectorAll('.cart-table tbody tr');

        rows.forEach(row => {
            const qtyInput = row.querySelector('.input-qty');
            if (!qtyInput) return;
            const quantity = parseQty(qtyInput.value);

            const priceCell = row.querySelector('td:nth-child(2) h5');
            const sellingPrice = parsePrice(priceCell.childNodes[0].textContent.trim());
            const delTag = priceCell.querySelector('del');
            const mrp = delTag ? parsePrice(delTag.textContent) : sellingPrice;

            totalItems += quantity;
            totalMRP += mrp * quantity;
            grandTotal += sellingPrice * quantity;
        });

        const totalDiscount = totalMRP - grandTotal;

        // Update summary DOM
        const itemsList = document.getElementById('cart-items-list');
        if (itemsList) {
            itemsList.innerHTML = '';
            rows.forEach((row, index) => {
                const qtyInput = row.querySelector('.input-qty');
                if (!qtyInput) return;
                const quantity = parseQty(qtyInput.value);

                const nameCell = row.querySelector('.product-info h5');
                let productName = nameCell ? nameCell.textContent.trim() : 'Product';
                if (productName.length > 20) productName = productName.slice(0, 20) + '...';

                const priceCell = row.querySelector('td:nth-child(2) h5');
                const sellingPrice = parsePrice(priceCell.childNodes[0].textContent.trim());

                const itemTotal = sellingPrice * quantity;
                const li = document.createElement('li');
                li.innerHTML = `
                    <span>${quantity} x ${productName}</span>
                    <span>$${itemTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                `;

                if (index >= 3) {
                    li.style.display = 'none';
                    li.classList.add('hidden-item');
                }

                itemsList.appendChild(li);
            });

            if (rows.length > 3) {
                const remainingCount = rows.length - 3;
                const toggleLi = document.createElement('li');
                toggleLi.className = 'toggle-items-li';
                toggleLi.innerText = `Show More (+${remainingCount})`;

                toggleLi.addEventListener('click', () => {
                    const hiddenItems = itemsList.querySelectorAll('.hidden-item');
                    const isExpanded = toggleLi.innerText === 'Show Less';

                    hiddenItems.forEach(item => item.style.display = isExpanded ? 'none' : 'flex');
                    toggleLi.innerText = isExpanded ? `Show More (+${remainingCount})` : 'Show Less';
                });

                itemsList.appendChild(toggleLi);
            }
        }

        // Update totals
        const updateElem = (id, value, prefix = '') => {
            const elem = document.getElementById(id);
            if (elem) elem.textContent = prefix + value.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        };

        updateElem('total-items', totalItems, '');
        updateElem('total-mrp', totalMRP, '$');
        updateElem('total-discount', totalDiscount, '-$');
        updateElem('grand-total', grandTotal, '$');
    };

    // ----------------------
    // Initialize Rows
    // ----------------------
    const initialRows = document.querySelectorAll('.cart-table tbody tr');
    initialRows.forEach(row => {
        const qtyInput = row.querySelector('.input-qty');
        const priceCell = row.querySelector('td:nth-child(2) h5');

        if (priceCell) {
            const sellingPrice = parsePrice(priceCell.childNodes[0].textContent.trim());
            const delTag = priceCell.querySelector('del');
            if (delTag) {
                const mrp = parsePrice(delTag.textContent);
                if (mrp > sellingPrice) {
                    const percentage = Math.round(((mrp - sellingPrice) / mrp) * 100);
                    let badge = priceCell.querySelector('.discount-badge');
                    if (!badge) {
                        badge = document.createElement('span');
                        badge.className = 'discount-badge';
                        priceCell.appendChild(badge);
                    }
                    badge.textContent = `Your Saving: ${percentage}%`;
                }
            }
        }

        if (qtyInput) {
            const quantity = parseQty(qtyInput.value);
            updateRowTotal(row, quantity);
        }
    });

    updateCartSummary();

    // ----------------------
    // Cart Button Clicks
    // ----------------------
    cartTable.addEventListener('click', e => {
        const qtyBtn = e.target.closest('.btn-qty');
        if (qtyBtn) {
            const input = qtyBtn.parentElement.querySelector('.input-qty');
            let value = parseQty(input.value);

            const icon = qtyBtn.querySelector('i');
            if (icon) {
                if (icon.classList.contains('ri-add-line') || icon.classList.contains('ri-add-fill')) value++;
                else if ((icon.classList.contains('ri-subtract-line') || icon.classList.contains('ri-subtract-fill')) && value > 1) value--;
            } else {
                const text = qtyBtn.innerText.trim();
                if (text === '+') value++;
                else if (text === '-' && value > 1) value--;
            }

            input.value = value;
            updateRowTotal(qtyBtn.closest('tr'), value);
        }

        const wishlistBtn = e.target.closest('.wishlist-btn');
        if (wishlistBtn) {
            e.preventDefault();
            alert('Product moved to wishlist!');
        }

        const removeBtn = e.target.closest('.remove-btn');
        if (removeBtn) {
            e.preventDefault();
            const row = removeBtn.closest('tr');
            if (row) {
                row.remove();
                updateCartSummary();
            }
        }
    });

    // ----------------------
    // Quantity Input Change
    // ----------------------
    cartTable.addEventListener('change', e => {
        if (e.target.classList.contains('input-qty')) {
            const input = e.target;
            let value = parseQty(input.value);
            if (value < 1) value = 1;
            input.value = value;
            updateRowTotal(input.closest('tr'), value);
        }
    });

    // ----------------------
    // Coupon Logic
    // ----------------------
    const applyCouponBtn = document.getElementById('applyCouponBtn');
    const couponModal = document.getElementById('couponModal');

    const applyCoupon = code => {
        const modalInstance = bootstrap.Modal.getInstance(couponModal);
        if (modalInstance) modalInstance.hide();

        const couponBox = document.querySelector('.coupon-box');
        if (couponBox) {
            couponBox.innerHTML = `
                <div class="label">
                    <i class="ri-price-tag-3-fill"></i> Code Applied
                </div>
                <div class="code text-success">
                    ${code} <i class="ri-close-circle-line remove-coupon"></i>
                </div>
            `;
            couponBox.removeAttribute('data-bs-toggle');
            couponBox.querySelector('.remove-coupon').addEventListener('click', e => {
                e.stopPropagation();
                removeCoupon();
            });
        }

        const totalDiscountElem = document.getElementById('total-discount');
        const grandTotalElem = document.getElementById('grand-total');
        const discount = 10;

        if (grandTotalElem) {
            let currentTotal = parsePrice(grandTotalElem.textContent);
            if (totalDiscountElem) {
                let currentDiscount = parsePrice(totalDiscountElem.textContent);
                totalDiscountElem.textContent = '-$' + (currentDiscount + discount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
            grandTotalElem.textContent = '$' + (currentTotal - discount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        alert('Coupon ' + code + ' applied successfully!');
    };

    const removeCoupon = () => {
        const couponBox = document.querySelector('.coupon-box');
        if (couponBox) {
            couponBox.setAttribute('data-bs-toggle', 'modal');
            couponBox.innerHTML = `
                <div class="label">
                    <i class="ri-price-tag-3-fill"></i> Apply Coupon
                </div>
                <div class="arrow">
                    <i class="ri-arrow-right-s-line"></i>
                </div>
            `;
        }
        updateCartSummary();
        alert('Coupon removed');
    };

    if (couponModal) {
        couponModal.addEventListener('click', e => {
            if (e.target.classList.contains('btn-apply')) {
                const code = e.target.getAttribute('data-code');
                applyCoupon(code);
            }
        });
    }

    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', () => {
            const input = document.querySelector('.search-coupon input');
            const code = input.value.trim();
            if (code) applyCoupon(code);
            else alert('Please enter a coupon code');
        });
    }
});