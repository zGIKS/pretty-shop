import { NextRequest, NextResponse } from "next/server";
import { signIn } from "@/lib/iam/services/auth-service";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.email !== "string" ||
    typeof body.password !== "string"
  ) {
    return NextResponse.json(
      { message: "Email y contraseña son obligatorios." },
      { status: 400 },
    );
  }

  try {
    const result = await signIn({
      email: body.email,
      password: body.password,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Error desconocido al iniciar sesión.";
    const status = message.includes("inválidas") ? 401 : 502;
    return NextResponse.json({ message }, { status });
  }
}