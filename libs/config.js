/** @format */
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAaFyXcnWyAYYSRLjIxdBMjpXRTe0PxArw",
  authDomain: "cobareact-ccc6d.firebaseapp.com",
  databaseURL:
    "https://cobareact-ccc6d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cobareact-ccc6d",
  storageBucket: "cobareact-ccc6d.appspot.com",
  messagingSenderId: "502927789480",
  appId: "1:502927789480:web:fa12bffa1a793ca7e4619d",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
