import { NextResponse } from "next/server";

const getGateway = () => {
  const value = process.env.NEXT_PUBLIC_AUTH_GATEWAY?.trim();
  return value ? value.replace(/\/+$/, "") : null;
};

export async function POST(request: Request) {
  const gateway = getGateway();
  if (!gateway) {
    return NextResponse.json({ error: "NEXT_PUBLIC_AUTH_GATEWAY is not configured" }, { status: 500 });
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json body" }, { status: 400 });
  }

  try {
    const response = await fetch(`${gateway}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const text = await response.text();
    const retryAfter = response.headers.get("Retry-After");

    return new NextResponse(text, {
      status: response.status,
      headers: {
        "Content-Type": response.headers.get("Content-Type") ?? "application/json",
        ...(retryAfter ? { "Retry-After": retryAfter } : {}),
      },
    });
  } catch {
    return NextResponse.json({ error: "failed to login" }, { status: 500 });
  }
}
