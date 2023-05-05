/** @format */

import React from "react";
import Link from "next/link";
import firebase_app from "../../../libs/config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);
const getMahasiswa = async () => {
  const querySnapshot = await getDocs(collection(db, "mahasiswa"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

export default async function Mahasiswa() {
  const mahasiswa = await getMahasiswa();
  console.log(mahasiswa);

  return (
    <>
      <div className="container">
        <Link href="/k/mahasiswa/add" className="btn btn-primary">
          add
        </Link>
        <div className="card mt-3 shadow">
          <table id="example" className="table table-striped" width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Jurusan</th>
                <th>No. Hp</th>
                <th>Program</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            {mahasiswa?.map((maha, id) => (
              <tbody key={id}>
                <tr>
                  <td> {maha.nama}</td>
                  <td>{maha.nik}</td>
                  <td>{maha.alamat}</td>
                  <td>{maha.jurusan}</td>
                  <td>2011/04/25</td>
                  <td>
                    <Link
                      href="/k/mahasiswa/edit"
                      className="btn btn-outline-primary mx-1"
                    >
                      edit
                    </Link>
                    <Link href="/#" className="btn btn-outline-danger">
                      delete
                    </Link>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
