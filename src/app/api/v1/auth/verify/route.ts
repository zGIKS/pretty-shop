"use server";

import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/iam/services/auth-service";

export async function GET(request: NextRequest) {
  const token =
    request.nextUrl.searchParams.get("token") ?? request.cookies.get("authToken")?.value;

  if (!token) {
    return NextResponse.json(
      { error: "Token no enviado", is_valid: false },
      { status: 400 },
    );
  }

  try {
    const verification = await verifyToken(token);

    if (!verification.is_valid) {
      const response = NextResponse.json(verification, { status: 401 });
      response.cookies.set("authToken", "", { path: "/", maxAge: 0 });
      response.cookies.set("authUserName", "", { path: "/", maxAge: 0 });
      return response;
    }

    return NextResponse.json(verification, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error al verificar la sesión.";
    return NextResponse.json({ error: message, is_valid: false }, { status: 502 });
  }
}
