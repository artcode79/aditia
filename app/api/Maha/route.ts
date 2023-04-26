/** @format */

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const mahasiswa = await prisma.mahasiswa.findMany();
  return NextResponse.json({ mahasiswa });
};

export const POST = async (req: NextRequest) => {
  const { nama, jurusan, alamat, ttlahir, nik, email, kota, kodepos } =
    await req.json();
  const mahasiswa = await prisma.mahasiswa.create({
    data: {
      nama,
      jurusan,
      alamat,
      ttlahir,
      nik,
      email,
      kota,
      kodepos,
    },
  });

  return NextResponse.json({ mahasiswa });
};
