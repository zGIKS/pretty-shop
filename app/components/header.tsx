import { Button } from "~/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-xl font-bold">Pretty Shop</h1>
      <nav className="flex gap-2">
        <Button variant="ghost">Productos</Button>
        <Button variant="ghost">Contactanos</Button>
      </nav>
    </header>
  );
}