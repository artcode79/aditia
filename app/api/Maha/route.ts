/** @format */

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const mahasiswa = await prisma.mahasiswa.findMany();
  return NextResponse.json({ mahasiswa });
};

export const POST = async (req: NextRequest) => {
  const {
    nama,
    jurusan,
    alamat,
    tanggal,
    no_ktp,
    email,
    kota,
    provinsi,
    kode_pos,
    no_hp,
  } = await req.json();

  const mahasiswa = await prisma.mahasiswa
    .create({
      data: {
        nama,
        jurusan,
        alamat,
        tanggal,
        no_ktp,
        email,
        kota,
        provinsi,
        kode_pos,
        no_hp,
      },
    })
    .then(() => {
      console.log("berhasil");
    })
    .catch((e: any) => {
      console.log(e);
    });

  return NextResponse.json({ mahasiswa });
};
