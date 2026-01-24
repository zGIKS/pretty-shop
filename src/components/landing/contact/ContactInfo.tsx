import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Music } from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información de contacto</CardTitle>
        <CardDescription>
          Puedes contactarnos directamente por estos medios
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link href="https://wa.me/51943373233" target="_blank" className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
          <Phone className="h-5 w-5 mt-0.5 text-primary" />
          <div>
            <p className="font-semibold">WhatsApp</p>
            <p className="text-sm text-muted-foreground">+51 943 373 233</p>
          </div>
        </Link>
        <div className="flex items-start gap-4 p-3">
          <Mail className="h-5 w-5 mt-0.5 text-primary" />
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-sm text-muted-foreground">johanasanto2020@gmail.com</p>
          </div>
        </div>
        <Link href="https://tiktok.com/@pretty.podoestetica" target="_blank" className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted transition-colors">
          <Music className="h-5 w-5 mt-0.5 text-primary" />
          <div>
            <p className="font-semibold">TikTok</p>
            <p className="text-sm text-muted-foreground">@pretty.podoestetica</p>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}