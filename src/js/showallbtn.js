const showAll = document.querySelector(".brands-menu__show-all");
const showAlltext = document.querySelector(".brands-text__show-all");
const brand9 = document.querySelector(".brand-9");
const brand10 = document.querySelector(".brand-10");
const brand11 = document.querySelector(".brand-11");
const contentSelector = document.querySelector(".text__2");
const contentSelectorBnt = document.querySelector(".content__btn-next");
let contentsSelectorBtnText = document.querySelector(".content__btn-next-text");
const showAllTech = document.querySelector(".view-tech-menu__show-all");
const techCase4 = document.querySelector(".view-tech__case-4");
let showAllTechText = document.querySelector(".view-tech-text__show-all");
let statusMenuOpenedBrand = true;
let statusMenuOpenedTech = true;

showAll.addEventListener("click", function (){
  if (statusMenuOpenedBrand) {
    brand9.style.display = "inline";
    brand10.style.display = "inline";
    brand11.style.display = "inline";
    showAlltext.innerHTML = "<p>Скрыть</p>"
    statusMenuOpenedBrand = false;
    showAll.classList.add("brands-menu__show-all--rotated");
  } else {
    brand9.style.display = "none";
    brand10.style.display = "none";
    brand11.style.display = "none";
    showAlltext.innerHTML = "<p>Показать все</p>"
    statusMenuOpenedBrand = true;
    showAll.classList.remove("brands-menu__show-all--rotated");
  }
})

showAllTech.addEventListener("click", function (){
  if (window.innerWidth >= 1120) {
    return;
  }

  if (statusMenuOpenedTech) {
    techCase4.style.display = "block";
    showAllTechText.innerHTML = "<p>Скрыть</p>";
    showAllTech.classList.add("view-tech-menu__show-all--rotated");
    statusMenuOpenedTech = false;
  } else {
    techCase4.style.display = "none";
    showAllTechText.innerHTML = "<p>Показать все</p>";
    showAllTech.classList.remove("view-tech-menu__show-all--rotated");
    statusMenuOpenedTech = true;
  }
})

let statusContent = true;
contentSelectorBnt.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (statusContent){
    contentSelector.style.display = "inline";
    statusContent = false;
    contentsSelectorBtnText.innerHTML = "<a>Скрыть</a>"
    contentSelectorBnt.classList.add("content__btn-next--rotated");
  } else{
    contentSelector.style.display = "none";
    statusContent = true;
    contentsSelectorBtnText.innerHTML = "<a>Читать далее</a>"
    contentSelectorBnt.classList.remove("content__btn-next--rotated");;
  }
})

