import { MessageCircle, Music } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_HREF, TIKTOK_HREF } from "@/lib/contact";

export default function ContactSocials() {
  return (
    <div className="border-t border-border pt-4">
      <div className="font-semibold mb-3">Redes sociales</div>
      <div className="flex items-center gap-4 text-muted-foreground">
        <Link
          href={WHATSAPP_HREF}
          target="_blank"
          aria-label="WhatsApp"
          className="hover:text-foreground"
        >
          <MessageCircle size={18} />
        </Link>
        <Link
          href={TIKTOK_HREF}
          target="_blank"
          aria-label="TikTok"
          className="hover:text-foreground"
        >
          <Music size={18} />
        </Link>
      </div>
    </div>
  );
}
