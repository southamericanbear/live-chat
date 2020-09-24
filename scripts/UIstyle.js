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

// signin modal
const signInBTN = document.getElementById("signInBTN");
signInBTN.addEventListener("click", (e) => {
  e.preventDefault();
  signInModal.style.display = "block";
});

const signInCloseBTN = document.getElementById("signInCloseBTN");
signInCloseBTN.addEventListener("click", (e) => {
  e.preventDefault();
  signInModal.style.display = "none";
});

const signInSubmit = document.querySelector(".signInSubmit");
function sigInClose() {
  signInSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    signInModal.style.display = "none";
  });
  signupForm.addEventListener("keyup", (e) => {
    e.preventDefault();
    signInModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target == signInModal) {
    signInModal.style.display = "none";
  }
});

// account info modal
const accountInfoBTN = document.getElementById("accountInfoBTN");

accountInfoBTN.addEventListener("click", (e) => {
  e.preventDefault();
  accountInfoModal.style.display = "block";
});

const accountCloseBTN = document.getElementById("accountCloseBTN");

accountCloseBTN.addEventListener("click", (e) => {
  e.preventDefault();
  accountInfoModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == accountInfoModal) {
    accountInfoModal.style.display = "none";
  }
});

// login modal

const loginBTN = document.getElementById("loginBTN");

loginBTN.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "block";
});

const logInSubmit = document.querySelector(".logInSubmit");
function logInclose() {
  logInSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "none";
  });
  logInSubmit.addEventListener("keyup", (e) => {
    e.preventDefault();
    loginModal.style.display = "none";
  });
}

const loginCloseBTN = document.getElementById("loginCloseBTN");

loginCloseBTN.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == loginModal) {
    loginModal.style.display = "none";
  }
});
