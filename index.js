const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-ul");

navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("nav-ul_visible");
});