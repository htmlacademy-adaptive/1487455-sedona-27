let navigationButton=document.querySelector(".navigation__button"),navigationList=document.querySelector(".navigation__list");document.querySelector(".navigation--no-js").classList.remove("navigation--no-js"),navigationButton.addEventListener("click",(t=>{t.preventDefault(),navigationButton.classList.toggle("navigation__button--close"),navigationList.classList.toggle("navigation__list--opened")}));