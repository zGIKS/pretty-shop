import ProtectedPage from "@/components/protected-page";

export default function SettingsPage() {
  return (
    <ProtectedPage>
      <div className="text-center">
        <h1>Configuración</h1>
      </div>
    </ProtectedPage>
  );
}