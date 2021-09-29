//menu
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

//Animacion Imagen
const target = document.querySelector(".about-right");
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
}
const observer = new IntersectionObserver(handleIntersection);
observer.observe(target);

//Indutrias Animacion

const observerElements = document.querySelectorAll(".elemento__contenido");

const Observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});

observerElements.forEach((el) => {
  Observer.observe(el);
});
