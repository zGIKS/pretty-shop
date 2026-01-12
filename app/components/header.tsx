import { Button } from "~/components/ui/button";
import logo from "~/assets/logo.png";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <img src={logo} alt="Pretty Shop" className="h-16" />
      <nav className="flex gap-2">
        <Button variant="ghost">Productos</Button>
        <Button variant="ghost">Contactanos</Button>
      </nav>
    </header>
  );
}