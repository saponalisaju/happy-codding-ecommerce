function init_iconsax() {
  document.querySelectorAll(".iconsax").forEach((el) => {
    let iconName = el.getAttribute("data-icon");

    if (!iconName) return;

    const img = document.createElement("img");
    img.src = `/assets/iconsax/${iconName}.svg`;

    el.innerHTML = "";
    el.appendChild(img);
  });
}

/* ✅ IMPORTANT: expose globally */
window.init_iconsax = init_iconsax;
