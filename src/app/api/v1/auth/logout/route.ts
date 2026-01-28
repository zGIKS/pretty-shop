"use server";

import { NextRequest, NextResponse } from "next/server";
import { logout } from "@/lib/iam/services/auth-service";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const refreshToken = body.refresh_token;

  try {
    await logout(refreshToken ?? undefined);
  } catch {
    // ignore backend errors to still clear local storage
  }

  return NextResponse.json({ message: "Sesión cerrada" }, { status: 200 });
}
