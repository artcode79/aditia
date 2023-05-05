/** @format */

import firebase_app from "../../../libs/config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function addData(colllection, id, data) {
  let result = null;
  let error = null;
  console.log(data);
  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
