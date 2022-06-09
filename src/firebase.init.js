// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBlYEYPohzy4bJpfhU5AgIvhEX4Py96XT4",
  authDomain: "ema-john-simple-46b7a.firebaseapp.com",
  projectId: "ema-john-simple-46b7a",
  storageBucket: "ema-john-simple-46b7a.appspot.com",
  messagingSenderId: "599781099481",
  appId: "1:599781099481:web:bd6a1d81514d7441f47bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  =getAuth(app);

export default auth;