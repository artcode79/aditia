/** @format */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import firebase_app from "@/libs/config";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

const db = getFirestore(firebase_app);

const Add = async () => {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [ktp, setKtp] = useState("");
  const [email, setEmail] = useState("");
  const [nohp, setNohp] = useState("");
  const [kota, setKota] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kode_pos, setKode_pos] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "mahasiswa"), {
      nama: nama,
      jurusan: jurusan,
      alamat: alamat,
      tanggal: tanggal,
      ktp: ktp,
      email: email,
      nohp: nohp,
      kota: kota,
      provinsi: provinsi,
      kode_pos: kode_pos,
    })
      .then((e) => {
        if (e) {
          return console.log(e);
        }
      })
      .catch((e) => {
        console.log("Document written with ID: ", docRef.id, e);
      });

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
            placeholder="1234 Main St"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
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
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
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
            value={ktp}
            onChange={(e) => setKtp(e.target.value)}
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
        <div className="col-md-6">
          <label htmlFor="provinsi" className="form-label">
            Provinsi
          </label>
          <input
            type="text"
            className="form-control"
            id="provinsi"
            value={provinsi}
            onChange={(e) => setProvinsi(e.target.value)}
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
            value={kode_pos}
            onChange={(e) => setKode_pos(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            No. Hp
          </label>
          <input
            type="number"
            className="form-control"
            id="inputZip"
            value={nohp}
            onChange={(e) => setNohp(e.target.value)}
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
