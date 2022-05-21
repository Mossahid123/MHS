// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC02V6NCI1qDaAliP6xSHOuG-JCoAAmPnM",
  authDomain: "assingment-12-hussain.firebaseapp.com",
  projectId: "assingment-12-hussain",
  storageBucket: "assingment-12-hussain.appspot.com",
  messagingSenderId: "551846667247",
  appId: "1:551846667247:web:d85a451d102bfba1954c1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)