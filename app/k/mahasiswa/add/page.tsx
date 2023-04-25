/** @format */

import Link from "next/link";
import React from "react";

export default function Add() {
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
            Address
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
            Address 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
          <Link href="/k/mahasiswa" className="btn btn-outline-warning mx-auto">
            Back
          </Link>
        </div>
      </form>
    </>
  );
}
