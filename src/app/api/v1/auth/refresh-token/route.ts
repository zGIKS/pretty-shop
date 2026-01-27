import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { refresh_token } = await request.json();

    if (!refresh_token) {
      return NextResponse.json(
        { message: "Refresh token es requerido" },
        { status: 400 }
      );
    }

    // Mock validation - replace with actual refresh logic
    if (refresh_token === "mock_refresh_token") {
      const newToken = "new_mock_access_token";
      const newRefreshToken = "new_mock_refresh_token";

      return NextResponse.json({
        token: newToken,
        refresh_token: newRefreshToken,
      });
    }

    return NextResponse.json(
      { message: "Refresh token inválido o expirado" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
