import { NextResponse } from "next/server";

const getGateway = () => {
  const value = process.env.NEXT_PUBLIC_API_GATEWAY?.trim();
  return value ? value.replace(/\/+$/, "") : null;
};

export async function POST(request: Request) {
  const gateway = getGateway();
  if (!gateway) {
    return NextResponse.json({ error: "NEXT_PUBLIC_API_GATEWAY is not configured" }, { status: 500 });
  }

  const contentType = request.headers.get("content-type") ?? "";
  const authorization = request.headers.get("authorization");

  if (!contentType.toLowerCase().startsWith("multipart/form-data")) {
    return NextResponse.json({ error: "invalid multipart form" }, { status: 400 });
  }

  try {
    const body = await request.arrayBuffer();
    const response = await fetch(`${gateway}/media/upload`, {
      method: "POST",
      headers: {
        ...(authorization ? { Authorization: authorization } : {}),
        "Content-Type": contentType,
      },
      body,
      cache: "no-store",
    });

    const text = await response.text();
    return new NextResponse(text, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") ?? "application/json",
      },
    });
  } catch {
    return NextResponse.json({ error: "failed to upload image" }, { status: 500 });
  }
}
