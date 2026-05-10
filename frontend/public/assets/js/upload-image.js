document.addEventListener("DOMContentLoaded", () => {
    const uploadContainers = document.querySelectorAll(".upload-container");

    uploadContainers.forEach((container) => {
        const uploadInput = container.querySelector("input[type='file']");
        const previewList = container.querySelector(".upload-preview-list");

        if (uploadInput && previewList) {
            uploadInput.addEventListener("change", function () {
                const files = Array.from(this.files);

                files.forEach((file) => {
                    if (file.type.startsWith("image/")) {
                        const reader = new FileReader();

                        reader.onload = function (e) {
                            const previewItem = document.createElement(
                                "div");
                            previewItem.className = "preview-item";
                            previewItem.innerHTML = `
                                <img src="${e.target.result}" alt="preview">
                                <button type="button" class="remove-btn">
                                    <i class="ri-close-line"></i>
                                </button>
                            `;

                            previewItem
                                .querySelector(".remove-btn")
                                .addEventListener("click", function () {
                                    previewItem.remove();
                                });

                            previewList.appendChild(previewItem);
                        };

                        reader.readAsDataURL(file);
                    }
                });

                this.value = "";
            });
        }
    });
});