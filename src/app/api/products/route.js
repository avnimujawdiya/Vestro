import { NextResponse } from "next/server";
import products from "@/data/products";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let result = products;
  if (category && category !== "All") {
    result = products.filter((p) => p.category === category);
  }

  return NextResponse.json(result);
}