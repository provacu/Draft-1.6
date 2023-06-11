const showAll = document.querySelector(".brands-menu__show-all");
const showAlltext = document.querySelector(".brands-text__show-all");
const brand9 = document.querySelector(".brand-9");
const brand10 = document.querySelector(".brand-10");
const brand11 = document.querySelector(".brand-11");
const contentSelector = document.querySelector(".text__2")
const contentSelectorBnt = document.querySelector(".content__btn-next")
let contentsSelectorBtnText = document.querySelector(".content__btn-next-text")
let statusMenuOpenedBrand = true;
showAll.addEventListener("click", function (){
  if (statusMenuOpenedBrand) {
    brand9.style.display = "inline";
    brand10.style.display = "inline";
    brand11.style.display = "inline";
    showAlltext.innerHTML = "<p>Скрыть</p>"
    statusMenuOpenedBrand = false;
  } else {
    brand9.style.display = "none";
    brand10.style.display = "none";
    brand11.style.display = "none";
    showAlltext.innerHTML = "<p>Показать все</p>"
    statusMenuOpenedBrand = true;
  }
})
let statusContent = true;
contentSelectorBnt.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (statusContent){
    contentSelector.style.display = "inline";
    statusContent = false;
    contentsSelectorBtnText.innerHTML = "<a>Скрыть</a>"
  } else{
    contentSelector.style.display = "none";
    statusContent = true;
    contentsSelectorBtnText.innerHTML = "<a>Читать далее</a>"
  }
})

