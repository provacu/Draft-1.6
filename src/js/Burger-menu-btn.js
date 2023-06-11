let burgerBtnOpen = document.querySelector(".header__elem1");
let burgerMenu = document.querySelector(".mobile-menu-main-container");
let burgerBtnClose = document.querySelector(".menu-back");
let modalBg = document.querySelector(".popup-black")

document.addEventListener('click', function(evt) {
  evt.preventDefault(burgerBtnClose);
  if (window.innerWidth < 1440 && evt.target.closest(".header__elem1")) {
    burgerMenu.classList.toggle("active");
  } else if (window.innerWidth < 1440 && (!evt.target.closest(".mobile-menu-main-container"))
    || (evt.target.closest(".menu-back"))) {
    burgerMenu.classList.remove("active");
  }
});
// burgerBtnOpen.addEventListener("click", function (evt){
//   evt.preventDefault();
//   burgerMenu.classList.add("active");
// })
// burgerBtnClose.addEventListener("click", function (evt){
//   evt.preventDefault();
//   burgerMenu.classList.remove("active");
// })
//
// window.addEventListener("click", function (event) {
//   if (event.target !== burgerMenu) {
//     burgerMenu.classList.remove("active");
//   }
// });

