const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-link");
const links = document.querySelectorAll(".nav-link li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
