"use server";

import { Buffer } from "buffer";
import { NextRequest, NextResponse } from "next/server";
import { exchangeCodeForToken } from "@/lib/iam/services/auth-service";

function decodeJwtPayload(token: string) {
  try {
    const payloadBase64 = token.split(".")[1];
    if (!payloadBase64) return null;
    const normalized = payloadBase64.replace(/-/g, "+").replace(/_/g, "/");
    const decoded = Buffer.from(normalized, "base64").toString("utf-8");
    return JSON.parse(decoded);
  } catch {
    return null;
  }
}

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
    const payload = decodeJwtPayload(authToken.token);
    const userName =
      payload?.name ?? payload?.email?.split("@")[0] ?? payload?.sub ?? "Usuario";

    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.set("authToken", authToken.token, {
      path: "/",
      sameSite: "lax",
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 30,
    });
    if (authToken.refreshToken) {
      response.cookies.set("authRefreshToken", authToken.refreshToken, {
        path: "/",
        sameSite: "lax",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30,
      });
    }
    response.cookies.set("authUserName", userName, {
      path: "/",
      sameSite: "lax",
      httpOnly: false,
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido al procesar el login.";
    return NextResponse.json({ message }, { status: 502 });
  }
}
