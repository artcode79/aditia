/** @format */

import Link from "next/link";
import React from "react";

const Edit = () => {
  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="namalengkap" className="form-label">
            Nama Lengkap
          </label>
          <input type="text" className="form-control" id="namalengkap" />
        </div>
        <div className="col-md-6">
          <label htmlFor="Jurusan" className="form-label">
            Jurusan
          </label>
          <input type="text" className="form-control" id="Jurusan" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Alamat
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Tanggal Lahir
          </label>
          <input type="date" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            No KTP
          </label>
          <input type="number" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputAddress2" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Kota
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Kode Pos
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
          <Link href="/k/mahasiswa" className="btn btn-outline-warning mx-3">
            Back
          </Link>
        </div>
      </form>
    </>
  );
};
export default Edit;
