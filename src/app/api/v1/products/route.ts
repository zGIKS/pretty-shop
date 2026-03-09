import { NextRequest, NextResponse } from "next/server";

const getGateway = () => {
  const value = process.env.NEXT_PUBLIC_API_GATEWAY?.trim();
  return value ? value.replace(/\/+$/, "") : null;
};

export async function GET(request: NextRequest) {
  const gateway = getGateway();
  if (!gateway) {
    return NextResponse.json({ error: "NEXT_PUBLIC_API_GATEWAY is not configured" }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");
  const category = searchParams.get("category");

  const url = new URL(`${gateway}/products`);
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
