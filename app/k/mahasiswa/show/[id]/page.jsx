/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { firestore } from "../../../../../libs/config";

const Page = ({ params }) => {
  const router = useRouter();
  const [mahasiswa, setMahasiswa] = useState(null);
  const id = params.id;

  useEffect(() => {
    if (id) {
      const docRef = firestore.collection("mahasiswa").doc(id);
      docRef.get().then((doc) => {
        if (doc.exists) {
          setMahasiswa(doc.data());
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [id]);
  if (!mahasiswa)
    return (
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  return (
    <>
      <div>
        <h2>{mahasiswa.nama}</h2>
        <p>{mahasiswa.ktp}</p>
        <p>{mahasiswa.jurusan}</p>
      </div>
      <button onClick={() => router.back()}>Kembali</button>
    </>
  );
};

export default Page;
