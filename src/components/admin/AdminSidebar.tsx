"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type AdminView = "create" | "products";

interface AdminSidebarProps {
  currentView: AdminView;
  productsCountText: string;
  onCreateClick: () => void;
  onProductsClick: () => void;
  onLogoutClick: () => void;
}

export default function AdminSidebar({
  currentView,
  productsCountText,
  onCreateClick,
  onProductsClick,
  onLogoutClick,
}: AdminSidebarProps) {
  return (
    <Card className="w-full md:w-72 md:shrink-0">
      <CardHeader>
        <CardTitle className="text-2xl">Admin</CardTitle>
        <CardDescription>{productsCountText}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          type="button"
          variant={currentView === "create" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={onCreateClick}
        >
          Crear producto
        </Button>
        <Button
          type="button"
          variant={currentView === "products" ? "default" : "outline"}
          className="w-full justify-start"
          onClick={onProductsClick}
        >
          Ver productos
        </Button>
        <Button type="button" variant="outline" className="mt-4 w-full" onClick={onLogoutClick}>
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}
