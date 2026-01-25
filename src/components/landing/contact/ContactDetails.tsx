import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactDetails() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <MapPin className="h-5 w-5 mt-0.5 text-primary" />
        <div>
          <div className="font-semibold">Dirección</div>
          <Link
            href="https://www.google.com/maps/place/Galeria+Santa+Rosa/@-12.1117681,-77.0268946,17z/data=!3m1!4b1!4m6!3m5!1s0x9105c81235f4b96f:0xce009f41ab12578b!8m2!3d-12.1117734!4d-77.0243197!16s%2Fg%2F11c2h_dxm3?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
          >
            Galería Santa Rosa, Surquillo
          </Link>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Phone className="h-5 w-5 mt-0.5 text-primary" />
        <div>
          <div className="font-semibold">Teléfono</div>
          <Link
            href="tel:+51943373233"
            className="text-muted-foreground hover:text-foreground"
          >
            +51 943 373 233
          </Link>
        </div>
      </div>
    </div>
  );
}
