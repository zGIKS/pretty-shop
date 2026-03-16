import { PHONE_NUMBER } from "@/lib/contact";

export const getWhatsAppLink = (message: string) => {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || PHONE_NUMBER).replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
