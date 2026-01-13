import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Music } from "lucide-react";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl mx-auto space-y-4">
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

            <Card>
              <CardHeader>
                <CardTitle>Horarios de atención</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes - Viernes</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="font-semibold">Cerrado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}