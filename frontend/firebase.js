// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARAfE0MPy6SIY7OmwcYep525teFCVJy6c",
  authDomain: "quickbites-app-23ae9.firebaseapp.com",
  projectId: "quickbites-app-23ae9",
  storageBucket: "quickbites-app-23ae9.firebasestorage.app",
  messagingSenderId: "211934842482",
  appId: "1:211934842482:web:7c772b26117e3eef283ceb",
  measurementId: "G-L27P64SRGH"
};
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const auth = getAuth();

function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup Success ✅");
    })
    .catch((error) => {
      alert(error.message);
    });
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Success 🚀");
    })
    .catch((error) => {
      alert(error.message);
    });
}

// IMPORTANT (HTML se connect karne ke liye)
window.login = login;
window.signup = signup;
