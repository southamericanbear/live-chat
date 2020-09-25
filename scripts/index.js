// setup user id
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountInfo = document.querySelector(".account-info-body");

let getTheuser = (user) => {
  if (user) {
    db.collection("users")
      .doc(user.uid)
      .get()
      .then((doc) => {
        username = doc.data().username;
        console.log(username);
        console.log(69);
      });
  }
};

getTheuser();

const setupUI = (user) => {
  if (user) {
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
