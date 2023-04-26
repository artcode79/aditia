/** @format */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

export default function Add() {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [ttlahir, setTtlahir] = useState("");
  const [nik, setNik] = useState("");
  const [email, setEmail] = useState("");
  const [kota, setKota] = useState("");
  const [kodepos, setKodepos] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);

    await fetch("api/Maha", {
      method: "POST",
      headers: {
        "Content-Type": " application/json",
      },
      body: JSON.stringify({
        nama,
        jurusan,
        alamat,
        ttlahir,
        nik,
        email,
        kota,
        kodepos,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    setIsLoading(false);
    router.push("/k/mahasiswa");
  };
  return (
    <>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="namalengkap" className="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="form-control"
            id="namalengkap"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="Jurusan" className="form-label">
            Jurusan
          </label>
          <input
            type="text"
            className="form-control"
            id="Jurusan"
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Alamat
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Tanggal Lahir
          </label>
          <input
            type="date"
            className="form-control"
            id="inputAddress2"
            value={ttlahir}
            onChange={(e) => setTtlahir(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            No KTP
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAddress2"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress2" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputAddress2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            Kota
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={kota}
            onChange={(e) => setKota(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Kode Pos
          </label>
          <input
            type="number"
            className="form-control"
            id="inputZip"
            value={kodepos}
            onChange={(e) => setKodepos(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Add Mahasiswa"}
          </button>
          <Link href="/k/mahasiswa" className="btn btn-outline-warning mx-3">
            Back
          </Link>
        </div>
      </form>
    </>
  );
}
