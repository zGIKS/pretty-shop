"use server";

import { NextRequest, NextResponse } from "next/server";
import { IAM_BACKEND_URL } from "@/lib/env";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        status: 400,
        message: "Token de confirmación ausente.",
      },
      { status: 400 },
    );
  }

  const params = new URLSearchParams({ token });
  const response = await fetch(
    `${IAM_BACKEND_URL}/api/v1/identity/confirm-registration?${params}`,
    {
      method: "GET",
      redirect: "manual",
    },
  );

  if (response.status >= 200 && response.status < 400) {
    return NextResponse.json(
      {
        success: true,
        status: response.status,
        message: "Cuenta confirmada correctamente.",
      },
      { status: 200 },
    );
  }

  const message =
    response.status === 400
      ? "Token inválido o expirado."
      : "Error interno al confirmar el registro.";

  return NextResponse.json(
    {
      success: false,
      status: response.status,
      message,
    },
    { status: response.status },
  );
}
