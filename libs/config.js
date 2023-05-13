/** @format */
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };
export default firebase;
