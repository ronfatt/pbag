import { BadgeCheck, Banknote, MapPin, MessageCircle } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { donation } from "@/data/siteContent";

const trustItems = [
  {
    title: "MOE Registered",
    icon: BadgeCheck
  },
  {
    title: "Public Bank Account",
    icon: Banknote
  },
  {
    title: "Visit By Appointment",
    icon: MapPin
  },
  {
    title: "WhatsApp Contact",
    icon: MessageCircle
  }
];

export function TrustTransparency() {
  return (
    <section id="trust" className="bg-[#fffaf0] py-10">
      <div className="section-shell">
        <SectionReveal>
          <div className="rounded-lg border border-[#e8ddc7] bg-white p-4 shadow-lg">
            <div className="grid gap-3 md:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item.title} className="flex items-center gap-3 rounded-md bg-[#fffaf0] p-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef8ef] text-[#138a3d]">
                    <item.icon size={21} />
                  </div>
                  <p className="text-sm font-black text-[#263128]">{item.title}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm font-semibold leading-6 text-[#66746a]">
              Give with confidence: {donation.bank}, {donation.accountName}, account {donation.accountNo}. Contact PBAG before visiting or sponsoring.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
