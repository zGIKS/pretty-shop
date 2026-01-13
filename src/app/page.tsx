import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Package, Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto">
      <header className="flex items-center justify-between p-6 border-b bg-white">
        <Image src="/pretty.png" alt="Pretty Logo" width={50} height={16} />
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Buscar..."
              className="pl-10 w-64"
            />
          </div>
          <Button variant="ghost" className="flex items-center gap-2">
            <Package size={20} />
            Productos
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Mail size={20} />
            Contacto
          </Button>
        </div>
      </header>
    </div>
  );
}
