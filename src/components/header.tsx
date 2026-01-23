"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Package, Mail, Menu, Briefcase } from "lucide-react";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-sm bg-white/95">
      <header className="max-w-7xl mx-auto flex items-center justify-between p-6">
        <Link href="/">
          <Image src="/pretty.png" alt="Pretty Logo" width={50} height={16} />
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <SearchBar className="w-64" />
           <Button variant="ghost" className="flex items-center gap-2" asChild>
             <Link href="/productos">
               <Package size={20} />
               Productos
             </Link>
           </Button>
           <Button variant="ghost" className="flex items-center gap-2" asChild>
             <Link href="/servicios">
               <Briefcase size={20} />
               Servicios
             </Link>
           </Button>
           <Button variant="ghost" className="flex items-center gap-2" asChild>
             <Link href="/contacto">
               <Mail size={20} />
               Contacto
             </Link>
           </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4 p-4">
              <SearchBar className="w-full" onResultClick={() => setOpen(false)} />
               <Button variant="ghost" className="w-full justify-start" onClick={() => setOpen(false)} asChild>
                 <Link href="/productos">
                   <Package size={20} className="mr-2" />
                   Productos
                 </Link>
               </Button>
               <Button variant="ghost" className="w-full justify-start" onClick={() => setOpen(false)} asChild>
                 <Link href="/servicios">
                   <Briefcase size={20} className="mr-2" />
                   Servicios
                 </Link>
               </Button>
               <Button variant="ghost" className="w-full justify-start" onClick={() => setOpen(false)} asChild>
                 <Link href="/contacto">
                   <Mail size={20} className="mr-2" />
                   Contacto
                 </Link>
               </Button>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </div>
  );
}