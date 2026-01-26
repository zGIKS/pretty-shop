"use server";

import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForToken } from "@/lib/iam/services/auth-service";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { message: "El código de autorización es obligatorio." },
      { status: 400 },
    );
  }

  try {
    const authToken = await exchangeCodeForToken(code);
    return NextResponse.json(authToken, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido al procesar el login.";
    return NextResponse.json({ message }, { status: 502 });
  }
}
