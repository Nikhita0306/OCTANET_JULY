var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var conatiner = document.querySelector(".container");


menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sidebar");
    conatiner.classList.toggle("large-container");
}
