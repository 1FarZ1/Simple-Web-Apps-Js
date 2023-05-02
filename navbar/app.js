
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");




// if the navbar toggle pressed , if links shown , it will be hidden , if links hidden , it will be shown
navToggle.addEventListener("click", () => {
  links.classList.toggle("show-links");
});