"use server";

import { NextRequest, NextResponse } from "next/server";
import { logout } from "@/lib/iam/services/auth-service";

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get("authRefreshToken")?.value;

  try {
    await logout(refreshToken ?? undefined);
  } catch {
    // ignore backend errors to still clear cookies locally
  }

  const response = NextResponse.json({ message: "Sesión cerrada" }, { status: 200 });
  response.cookies.set("authToken", "", {
    path: "/",
    maxAge: 0,
  });
  response.cookies.set("authRefreshToken", "", {
    path: "/",
    maxAge: 0,
  });
  response.cookies.set("authUserName", "", {
    path: "/",
    maxAge: 0,
  });

  return response;
}
