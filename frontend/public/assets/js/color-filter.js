/*====================
    Color Filter JS
=======================*/
document.querySelectorAll(".color-filter, .categories-box").forEach(ul => {
    const items = ul.querySelectorAll("li");

    if (items.length > 5) {
        const btn = document.createElement("button");
        btn.innerText = "Show more";
        btn.classList.add("btn", "show-toggle-btn");

        ul.append(btn);

        let isExpanded = false;
        hideExtra();

        function hideExtra() {
            for (let i = 5; i < items.length; i++) {
                items[i].style.display = "none";
            }
        }

        function showExtra() {
            for (let i = 5; i < items.length; i++) {
                items[i].style.display = "";
            }
        }

        btn.addEventListener("click", function () {
            if (!isExpanded) {
                showExtra();
                btn.innerText = "Show less";
                isExpanded = true;
            } else {
                hideExtra();
                btn.innerText = "Show more";
                isExpanded = false;
            }
        });
    }
});