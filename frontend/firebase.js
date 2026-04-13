// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// 🔥 Tumhara Firebase Config (already correct)
const firebaseConfig = {
  apiKey: "AIzaSyARAfE0MPy6SIY7OmwcYep525teFCVJy6c",
  authDomain: "quickbites-app-23ae9.firebaseapp.com",
  projectId: "quickbites-app-23ae9",
  storageBucket: "quickbites-app-23ae9.appspot.com",
  messagingSenderId: "211934842482",
  appId: "1:211934842482:web:xxxxxxx"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ======================
// ✅ SIGNUP FUNCTION
// ======================
function signup() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields ⚠️");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup Success ✅");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
}

// ======================
// ✅ LOGIN FUNCTION
// ======================
function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields ⚠️");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Success 🚀");
      console.log(userCredential.user);
    })
    .catch((error) => {
      alert(error.message);
      console.error(error);
    });
}

// ✅ Important (HTML connect)
window.signup = signup;
window.login = login;
