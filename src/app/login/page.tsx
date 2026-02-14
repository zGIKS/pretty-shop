import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <section className="w-full max-w-sm rounded-xl border border-border bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">Iniciar sesión</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ingresa tu nombre de usuario y contraseña.
        </p>

        <form className="mt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Nombre de usuario</Label>
            <Input id="username" name="username" type="text" autoComplete="username" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contrasenia">Contraseña</Label>
            <Input
              id="contrasenia"
              name="contrasenia"
              type="password"
              autoComplete="current-password"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Ingresar
          </Button>
        </form>
      </section>
    </main>
  );
}
