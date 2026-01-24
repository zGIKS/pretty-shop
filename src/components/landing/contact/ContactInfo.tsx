import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ContactDetails from "@/components/landing/contact/ContactDetails";
import ContactHours from "@/components/landing/contact/ContactHours";
import ContactSocials from "@/components/landing/contact/ContactSocials";

export default function ContactInfo() {
  return (
    <Card className="h-full min-h-[520px]">
      <CardHeader>
        <CardTitle>Contáctanos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 text-sm">
        <ContactDetails />
        <ContactHours />
        <ContactSocials />
      </CardContent>
    </Card>
  );
}
