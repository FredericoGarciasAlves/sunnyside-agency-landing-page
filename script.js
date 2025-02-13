const menu = document.querySelector(".menu");
const header = document.querySelector(".header");

menu.addEventListener("click", () => {
    const boxMenuClass = document.querySelector(".box-menu");
    if (!boxMenuClass) {
        const boxMenu = document.createElement("div");
        boxMenu.className = "box-menu";
        boxMenu.innerHTML = `
        <p class="h-about"><a href="#" class="h-link">About</a></p>
        <p class="h-services"><a href="#" class="h-link">Services</a></p>
        <p class="h-projects"><a href="#" class="h-link">Project</a></p>
        <p class="h-contact"><a href="#" class="contact">Contact</a></p>
        `;
        header.appendChild(boxMenu);
    }

    if (boxMenuClass) {
        boxMenuClass.remove();
    }
});
