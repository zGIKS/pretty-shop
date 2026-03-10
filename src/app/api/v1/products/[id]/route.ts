import { NextRequest, NextResponse } from "next/server";

const getGateway = () => {
  const value = process.env.NEXT_PUBLIC_API_GATEWAY?.trim();
  return value ? value.replace(/\/+$/, "") : null;
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const gateway = getGateway();
  if (!gateway) {
    return NextResponse.json({ error: "NEXT_PUBLIC_API_GATEWAY is not configured" }, { status: 500 });
  }

  const { id } = await params;

  try {
    const response = await fetch(`${gateway}/products/${encodeURIComponent(id)}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
      }
      return NextResponse.json({ error: "Failed to fetch product" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
