interface LegalTextProps {
  isLogin: boolean;
}

export function LegalText({ isLogin }: LegalTextProps) {
  return isLogin ? (
    <div className="space-y-1">
      <span>¿No tienes cuenta?</span>{" "}
      <a href="/register" className="underline">
        Regístrate
      </a>
    </div>
  ) : (
    <div className="space-y-1">
      <div>
        ¿Ya tienes una cuenta?{" "}
        <a href="/login" className="underline">
          Inicia sesión
        </a>
      </div>
      <div>
        Al continuar, aceptas nuestra{" "}
        <a href="/privacy" className="underline">
          Política de Privacidad
        </a>{" "}
        y{" "}
        <a href="/terms" className="underline">
          Términos de Servicio
        </a>
        .
      </div>
    </div>
  );
}