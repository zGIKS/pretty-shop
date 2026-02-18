const DEFAULT_WHATSAPP_NUMBER = "51943373233";

export const getWhatsAppLink = (message: string) => {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER).replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
