/** @format */

import { NextRequest, NextResponse } from "next/server";
import firebase_app from "../../../libs/config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app);

export const GET = async (req: NextRequest) => {
  const querySnapshot = await getDocs(collection(db, "mahasiswa"));

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    console.log(doc.id, " => ", doc.data());
    return NextResponse.json(querySnapshot);
  });
};

// export const POST = async (req: NextRequest) => {
//   const {
//     nama,
//     jurusan,
//     alamat,
//     tanggal,
//     no_ktp,
//     email,
//     kota,
//     provinsi,
//     kode_pos,
//     no_hp,
//   } = await req.json();

//   const mahasiswa = await prisma.mahasiswa
//     .create({
//       data: {
//         nama,
//         jurusan,
//         alamat,
//         tanggal,
//         no_ktp,
//         email,
//         kota,
//         provinsi,
//         kode_pos,
//         no_hp,
//       },
//     })
//     .then(() => {
//       console.log("berhasil");
//     })
//     .catch((e: any) => {
//       console.log(e);
//     });

//   return NextResponse.json({ mahasiswa });
// };
