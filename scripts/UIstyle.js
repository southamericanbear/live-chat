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

// setup user id
const loggedOutLinks = document.querySelector(".logged-out");
const loggedInLinks = document.querySelector(".logged-in");
const accountInfo = document.querySelector(".account-info-body");

const setupUI = (user) => {
  if (user) {
    console.log(user);
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        let html = `<div>Your login with the email: ${
          user.email
        }</div> <div>As user: ${doc.data().username}</div>`;
        accountInfo.innerHTML = html;
      });

    loggedOutLinks.forEach((item) => (item.style.display = "none"));
    loggedInLinks.forEach((item) => (item.style.display = "block"));
  } else {
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    accountInfo.innerHTML = "bye";
  }
};
