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

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json body" }, { status: 400 });
  }

  try {
    const response = await fetch(`${gateway}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
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
    return NextResponse.json({ error: "failed to refresh token" }, { status: 500 });
  }
}
