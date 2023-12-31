// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUditoyJ2eKQXBHdLt6qUhcGfH9zsPuro",
  authDomain: "read-write-9afa4.firebaseapp.com",
  databaseURL: "https://read-write-9afa4-default-rtdb.firebaseio.com",
  projectId: "read-write-9afa4",
  storageBucket: "read-write-9afa4.appspot.com",
  messagingSenderId: "840266526710",
  appId: "1:840266526710:web:d3685f9f721de92d9a61d7",
  measurementId: "G-7PY3QHN3T3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// get ref to database
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e){

  e.preventDefault();

    let name = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

  set(ref(db, 'User/' + document.getElementById('username').value),
  {
      username: name,
      email: email,
      phone: phone,
  });
  alert("Successful");
  console.log(name,email,phone);
});