/**
 * eslint-disable react-hooks/rules-of-hooks
 *
 * @format
 */
"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../libs/config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconTrash, IconEyeFilled, IconPencil } from "@tabler/icons-react";

const deleteData = async (id) => {
  await firestore
    .collection("mahasiswa")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!", "id", id);
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

const Mahasiswa = () => {
  const [data, setData] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const data = await firestore.collection("mahasiswa").get();
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  const dataDeleted = (id) => {
    deleteData(id);
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
                <th scope="col" className="text-center">
                  No
                </th>
                <th scope="col" className="text-center">
                  Name
                </th>
                <th scope="col" className="text-center">
                  Jurusan
                </th>
                <th scope="col" className="text-center">
                  No. Hp
                </th>
                <th scope="col" className="text-center">
                  Program
                </th>
                <th scope="col" className="text-center">
                  Status
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {data?.map((maha, id) => (
                <tr key={id}>
                  <td className="text-center ">{id + 1}</td>
                  <td className="text-center "> {maha.nama}</td>
                  <td className="text-center ">{maha.ktp}</td>
                  <td className="text-center ">{maha.no_hp}</td>
                  <td className="text-center ">{maha.jurusan}</td>
                  <td className="text-center ">2011/04/25</td>
                  <td colspan="1" className="text-center" scope="row-2">
                    <Link
                      href={`/k/mahasiswa/edit/${maha.id}`}
                      className="btn btn-outline-primary mx-1"
                      style={{
                        height: "30px",
                        width: "30px",
                        padding: 0,
                        border: "none",
                      }}
                    >
                      <IconPencil />
                    </Link>
                    <Link
                      href={`/k/mahasiswa/show/${maha.id}`}
                      className="btn btn-outline-info mx-1"
                      style={{
                        height: "30px",
                        width: "30px",
                        padding: 0,
                        border: "none",
                      }}
                    >
                      <IconEyeFilled />
                    </Link>
                    <Link
                      onClick={() => dataDeleted(maha.id)}
                      className="btn btn-outline-danger"
                      style={{
                        height: "30px",
                        width: "30px",
                        padding: 0,
                        border: "none",
                      }}
                    >
                      <IconTrash />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {paginAtion()}
    </>
  );

  function paginAtion() {
    return (
      <nav aria-label="...">
        <ul className="pagination my-2 justify-content-center">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <span className="page-link">2</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
};
export default Mahasiswa;
