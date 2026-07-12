import { NextResponse } from "next/server";
import products from "@/data/products";

export async function GET(request, { params }) {
  const { id } = await params;
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  const recommended = products
    .filter((p) => p.category === category && p.id !== parseInt(id))
    .slice(0, 4);

  return NextResponse.json(recommended);
}