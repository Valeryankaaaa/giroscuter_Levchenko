const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".head");
menuButton.addEventListener("click",() => {
    menu.classList.toggle("is-open");
});
const menuButton2 = document.querySelector(".m-menu2");
const menu2 = document.querySelector(".ct-m");
menuButton2.addEventListener("click",() => {
    menu2.classList.toggle("is-open");
});
