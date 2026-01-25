import { Instagram, MessageCircle, Music } from "lucide-react";
import Link from "next/link";

export default function ContactSocials() {
  return (
    <div className="border-t border-border pt-4">
      <div className="font-semibold mb-3">Redes sociales</div>
      <div className="flex items-center gap-4 text-muted-foreground">
        <Link
          href="https://instagram.com/"
          target="_blank"
          aria-label="Instagram"
          className="hover:text-foreground"
        >
          <Instagram size={18} />
        </Link>
        <Link
          href="https://wa.me/51943373233"
          target="_blank"
          aria-label="WhatsApp"
          className="hover:text-foreground"
        >
          <MessageCircle size={18} />
        </Link>
        <Link
          href="https://tiktok.com/@pretty.podoestetica"
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
