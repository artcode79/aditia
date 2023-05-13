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

const fetchPaginatedData = async (collectionName, itemsPerPage, lastDoc) => {
  let data = [];
  let query = firestore.collection(collectionName).orderBy("nama", "asc");

  if (lastDoc) {
    query = query.startAfter(lastDoc);
  }

  const snapshot = await query.limit(itemsPerPage).get();

  snapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  const lastVisible = snapshot.docs[snapshot.docs.length - 1];

  return { data, lastVisible };
};

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth, fetchPaginatedData };
export default firebase;
