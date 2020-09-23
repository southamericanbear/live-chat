// burger and nav code
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-link");
const links = document.querySelectorAll(".nav-link li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

// modal triggers
const closeBTN = document.querySelector(".closeBTN");
const modal = document.querySelector(".modal");
const accountInfoBTN = document.getElementById("accountInfoBTN");
const logInBTN = document.getElementById("loginBTN");
const logOutBTN = document.getElementById("logoutBTN");

// account info modal
accountInfoBTN.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

// login modal
logInBTN.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

// logout modal
logOutBTN.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "block";
});

closeBTN.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
