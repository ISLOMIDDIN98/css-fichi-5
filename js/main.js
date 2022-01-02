



let container = document.querySelector(".menu-btn");

 Nav = document.querySelector(".menu-nav");

container.addEventListener("click", function(e){
container.classList.toggle("menu-btn-active");
Nav.classList.toggle('menu-nav-active');

});