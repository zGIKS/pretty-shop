"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CreditCard, Gift, ChevronDown, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const experienceItems = [
  { title: "Membresías", href: "/membresias", Icon: CreditCard },
  { title: "Paquetes", href: "/paquetes", Icon: Gift },
];

export function ExperiencesDropdown() {
  const pathname = usePathname();

  return (
    <div className="group relative pb-2">
      <Button
        asChild
        variant="ghost"
        className="flex items-center gap-2 hover:bg-transparent hover:underline underline-offset-4"
      >
        <Link href="/membresias">
          <Sparkles size={20} />
          Experiencias
          <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
        </Link>
      </Button>

      <div className="pointer-events-none absolute left-0 top-full z-50 w-72 pt-3 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="rounded-3xl border border-border bg-popover p-3 shadow-[0_24px_80px_-36px_rgba(28,25,23,0.45)]">
          <div className="space-y-1">
            {experienceItems.map((item) => {
              const ItemIcon = item.Icon;
              const current = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 ${
                    current
                      ? "border-primary/40 bg-primary/18"
                      : "border-transparent hover:border-primary/25 hover:bg-primary/10"
                  }`}
                >
                  <span
                    className={`rounded-full p-2 ${
                      current
                        ? "bg-primary/25 text-primary"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <ItemIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
