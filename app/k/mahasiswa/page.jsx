/** @format */

"use client";
import React, { useState, useEffect } from "react";
import { firestore } from "../../../libs/config";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IconTrash, IconEyeFilled, IconPencil } from "@tabler/icons-react";

async function deleteData(id) {
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
}

const Mahasiswa = () => {
  const [mahasiswas, setMahasiswas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [mahasiswasPerPage, setMahasiswasPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(false);
      const mahasiswasRef = firestore.collection("mahasiswa");
      const data = await mahasiswasRef.get();
      const mahasiswas = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMahasiswas(mahasiswas);
    };
    fetchData();
  }, []);

  const indexOfLastMahasiswa = currentPage * mahasiswasPerPage;
  const indexOfFirstMahasiswa = indexOfLastMahasiswa - mahasiswasPerPage;
  const currentMahasiswas = mahasiswas.slice(
    indexOfFirstMahasiswa,
    indexOfLastMahasiswa
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(mahasiswas.length / mahasiswasPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li
      key={number}
      className={`h-auto page-item ${currentPage === number ? "active" : ""}`}
    >
      <button
        className="h-100 page-link border-none shadow-sm btn btn-sm btn-outline-info me-1"
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </button>
    </li>
  ));

  const dataDeleted = async (id) => {
    await deleteData(id);
  };

  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-12 ">
            <Link href="/k/mahasiswa/add" className="btn btn-info text-white">
              add
            </Link>
          </div>
          {/* data ini untuk search  */}
        </div>

        <table
          id="example"
          className="table table-responsive-sm table-bordered"
          style={{ width: "100%", backgroundColor: "#F8F6F6" }}
        >
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
            {currentMahasiswas?.map((maha, id) => (
              <tr key={id}>
                <td className="text-center">
                  {id + 1 + indexOfFirstMahasiswa}
                </td>
                <td className="text-center ">
                  <Link
                    className="text-decoration-none text-dark"
                    href={`/k/mahasiswa/show/${maha.id}`}
                  >
                    {maha.nama}
                  </Link>
                </td>
                <td className="text-center ">{maha.ktp}</td>
                <td className="text-center ">{maha.no_hp}</td>
                <td className="text-center ">{maha.jurusan}</td>
                <td className="text-center ">2011/04/25</td>
                <td colSpan="1" className="text-center" scope="row-2">
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
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{
                      height: "30px",
                      width: "30px",
                      padding: 0,
                      border: "none",
                    }}
                  >
                    <IconTrash />
                  </button>
                  {/* <!-- Modal --> */}
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1
                            className="modal-title fs-5"
                            id="exampleModalLabel"
                          >
                            Hapus Data
                          </h1>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">Apakah anda yakin?</div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            &laquo;
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              dataDeleted(maha.id);
                              router.push(`/k/mahasiswa/`);
                            }}
                            className="btn btn-danger"
                          >
                            <IconTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {loading && (
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading Mas Bro...</span>
          </div>
        )}
        <div className=" mt-3">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                style={{
                  marginRight: "10px",
                }}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {renderPageNumbers}
            <li
              className={` page-item ${
                currentPage === Math.ceil(mahasiswas.length / mahasiswasPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                className="page-link"
                style={{ marginLeft: "5px" }}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Mahasiswa;
