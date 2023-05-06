/**
 * eslint-disable react-hooks/rules-of-hooks
 *
 * @format
 */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Mahasiswa = () => {
  const [mahasiswa, setMahasiswa] = useState([]);
  const [databaseId, setDatabaseId] = useState([]);

  useEffect(() => {
    getMahasiswa().then((data) => {
      setMahasiswa(data[0]);
      setDatabaseId(data[1]);
    });
  });

  console.log(mahasiswa);
  console.log(databaseId);
  const getMahasiswa = async () => {
    const res = await fetch(" http://localhost:3000/api/Maha");
    const data = await res.json();
    return data;
  };

  return (
    <>
      <div className="container">
        <Link href="/k/mahasiswa/add" className="btn btn-info text-white">
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
            <tbody>
              {mahasiswa?.map((maha, id) => (
                <tr key={id}>
                  <td> {maha.nama}</td>
                  <td>{maha.ktp}</td>
                  <td>{maha.alamat}</td>
                  <td>{maha.jurusan}</td>
                  <td>2011/04/25</td>
                  <td>
                    <Link
                      href="/k/mahasiswa/:id/edit"
                      className="btn btn-outline-primary mx-1"
                    >
                      edit
                    </Link>
                    <Link
                      href="/k/mahasiswa/show/:id"
                      className="btn btn-outline-info mx-1"
                    >
                      Show
                    </Link>
                    <Link href="#" className="btn btn-outline-danger">
                      delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Mahasiswa;
