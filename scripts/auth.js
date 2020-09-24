// listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    setupUI(user);
  } else {
    setupUI();
  }
});

// create new user
const signupForm = document.querySelector("#signin");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["signin-email"].value;
  const password = signupForm["signin-password"].value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      return db.collection("users").doc(cred.user.uid).set({
        username: signupForm["signin-username"].value,
      });
    })
    .catch((err) => {
      signupForm.querySelector(".error").innerHTML = err.message;
    });
  sigInClose();
  console.log("You signed in successfully");
});

// login
const loginForm = document.querySelector("#login");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(`Logged in as ${email}`);
      loginForm.reset();
      loginForm.querySelector(".error").innerHTML = "";
    })
    .catch((err) => {
      loginForm.querySelector(".error").innerHTML = err.message;
    });
  logInclose();
});

// logout

const logout = document.querySelector("#logoutBTN");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut();
  console.log("Logged out successfully ");
});
