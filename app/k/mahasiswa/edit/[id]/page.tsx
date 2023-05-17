/** @format */

import Link from "next/link";
import React from "react";
import { firestore } from "../../../../../libs/config";

interface dats {
  nama: string;
  npm: string;
  jurusan: string;
}

const Edit = async ({ params, id }: { params: any; id: string }) => {
  const maha = await firestore
    .collection("mahasiswa")
    .doc(id)
    .update(params)
    .then(() => {
      console.log("berhasil");
    });

  return (
    <>
      <h1>Edit {maha.nama}</h1>
    </>
  );
};
export default Edit;
