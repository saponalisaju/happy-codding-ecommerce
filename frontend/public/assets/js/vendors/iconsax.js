/*====================
   Iconsax Js
=======================*/
document.addEventListener("DOMContentLoaded", () => {
    init_iconsax();
});

function init_iconsax() {
    document.querySelectorAll(".iconsax").forEach((iconsax) => {
        var iconName = iconsax.getAttribute("data-data-icon") || iconsax.getAttribute("data-icon");

        if (iconName) {
            iconName = iconName.toLowerCase().trim();

            var iconImage = document.createElement("img");
            iconImage.src = "../assets/iconsax/" + iconName + ".svg";
            iconImage.alt = "";
            iconImage.setAttribute("aria-hidden", "true");
            iconsax.replaceChildren(iconImage);
        }
    });
}