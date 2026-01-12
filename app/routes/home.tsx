import type { Route } from "./+types/home";
import { Header } from "../components/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pretty Shop" },
    { name: "description", content: "Welcome to Pretty Shop!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h2 className="text-2xl font-semibold mb-4">Bienvenido a Pretty Shop</h2>
        <p>Esta es la página de inicio.</p>
      </main>
    </div>
  );
}
