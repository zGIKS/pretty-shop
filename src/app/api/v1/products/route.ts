import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");
  const category = searchParams.get("category");

  const url = new URL(`${process.env.NEXT_PUBLIC_API_GATEWAY}/api/v1/products`);
  if (limit) url.searchParams.set("limit", limit);
  if (offset) url.searchParams.set("offset", offset);
  if (category) url.searchParams.set("category", category);

  try {
    const response = await fetch(url.toString(), {
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Failed to fetch products" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}