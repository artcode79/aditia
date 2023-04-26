/** @format */

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const mahasiswa = await prisma.mahasiswa.findMany();
  return NextResponse.json({ mahasiswa });
};
