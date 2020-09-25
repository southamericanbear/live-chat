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

// login modal

const loginBTN = document.getElementById("loginBTN");

loginBTN.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "block";
});

const loginCloseBTN = document.getElementById("loginCloseBTN");
loginCloseBTN.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "none";
});

const logInSubmit = document.querySelector(".logInSubmit");
function logInclose() {
  logInSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    loginModal.style.display = "none";
  });
}
function logIncloseEnter() {
  logInSubmit.addEventListener("keyup", (e) => {
    e.preventDefault();
    loginModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target == loginModal) {
    loginModal.style.display = "none";
  }
});

// chat interface

class ChatUI {
  constructor(list) {
    this.list = list;
  }
  clear() {
    this.list.innerHTML = "";
  }
  render(data) {
    let when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSuffix: true,
    });
    const html = `
    <li class="sended-msg"><span class="username">${data.username}: </span> <span class="message">${data.message}</span><div class="time">${when}</div>
    </li>`;
    this.list.innerHTML += html;
  }
}

// setup recived messeges
// const setUpChats = (data) => {
//   if (data.length) {
//     let html = "";
//     data.forEach((doc) => {
//       const recived = doc.data();
//       const li = `<li class="recived-msg"><span class="username">${recived.username}: </span> <span class="message">${recived.message}</span><div class="time">${when}</div>
//       </li>`;
//       html += li;
//     });
//   }
// };
