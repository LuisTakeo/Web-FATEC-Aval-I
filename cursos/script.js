const menuHamburger = document.querySelector(".menu-hamburger");
const navList = document.querySelector(".nav-list");

menuHamburger.addEventListener("click", () => {
  navList.classList.toggle("display-show");
  console.log("clicked");
});
