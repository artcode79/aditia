/** @format */

import React from "react";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch(process.env.BASE_URL + "Maha", {
    next: { revalidate: 0 },
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return res;
}

export default async function Mahasiswa() {
  const mahasiswa = await getStaticProps();

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
            {mahasiswa?.mahasiswa?.map((maha: any, index: number) => (
              <tbody key={index}>
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
