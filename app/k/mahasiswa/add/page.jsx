/** @format */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { firestore } from "../../../../libs/config";
import React from "react";

const Add = () => {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Mengambil data dari form
    const data = {
      nama: event.target.nama.value,
      ktp: parseInt(event.target.ktp.value),
      jurusan: event.target.jurusan.value,
      alamat: event.target.alamat.value,
      tanggal: event.target.tanggal.value,
      kota: event.target.kota.value,
      provinsi: event.target.provinsi.value,
      kode_pos: parseInt(event.target.kode_pos.value),
      no_hp: parseInt(event.target.no_hp.value),

      email: event.target.email.value,
    };

    // Menambahkan data ke Firestore
    try {
      const docRef = await firestore.collection("mahasiswa").add(data);
      console.log("Data berhasil ditambahkan dengan ID:", docRef.id);
    } catch (error) {
      console.error("Error menambahkan data:", error);
    }
    router.push("/k/mahasiswa");
  };
  return (
    <>
      <form className="row g-3" method="POST" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="namalengkap" className="form-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="form-control"
            id="namalengkap"
            name="nama"
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
            name="jurusan"
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
            placeholder="1234 Main St"
            name="alamat"
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
            name="tanggal"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress28" className="form-label">
            No KTP
          </label>
          <input
            type="number"
            className="form-control"
            id="inputAddress28"
            name="ktp"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress21" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputAddress21"
            name="email"
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
            name="kota"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="provinsi" className="form-label">
            Provinsi
          </label>
          <input
            type="text"
            className="form-control"
            id="provinsi"
            name="provinsi"
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
            name="kode_pos"
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            No. Hp
          </label>
          <input
            type="number"
            name="no_hp"
            className="form-control"
            id="inputZip"
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add mahasiswa
          </button>
          <Link href="/k/mahasiswa" className="btn btn-outline-warning mx-3">
            Back
          </Link>
        </div>
      </form>
    </>
  );
};

export default Add;
