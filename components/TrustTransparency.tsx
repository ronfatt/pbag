import { BadgeCheck, Banknote, Eye, MapPin, ReceiptText, ShieldCheck } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { donation } from "@/data/siteContent";

const trustItems = [
  {
    title: "MOE registered",
    description: "Registered by Malaysia Ministry of Education in Putrajaya on 15 June 2015.",
    icon: BadgeCheck
  },
  {
    title: "Named bank account",
    description: `${donation.bank}, ${donation.accountName}, ${donation.accountNo}.`,
    icon: Banknote
  },
  {
    title: "Visit by appointment",
    description: "Supporters may request a centre visit through Madam Esther before coming.",
    icon: MapPin
  },
  {
    title: "Clear giving channels",
    description: "Cash, cheque, local transfer, international transfer, DuitNow QR, and in-kind support.",
    icon: ReceiptText
  }
];

export function TrustTransparency() {
  return (
    <section id="trust" className="section-y bg-[#fffaf0]">
      <div className="section-shell">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9342b]">Transparency & trust</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">
              Give With Confidence
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#56645a]">
            PBAG keeps donation details public, contactable, and tied to a named centre account so supporters can give, verify, and visit with confidence.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <SectionReveal key={item.title} delay={index * 0.05}>
              <article className="h-full rounded-lg border border-[#e8ddc7] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#eef8ef] text-[#138a3d]">
                  <item.icon size={22} />
                </div>
                <h3 className="text-lg font-black text-[#263128]">{item.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#66746a]">{item.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.16}>
          <div className="mt-8 flex flex-col gap-4 rounded-lg bg-[#113f25] p-6 text-white shadow-xl md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#f4bd45]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-xl font-black">Want to verify before giving?</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-white/76">
                  Contact Madam Esther by WhatsApp to confirm current needs, arrange a visit, or ask about sponsorship.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/60198088281"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#f4bd45] px-6 py-4 text-sm font-black text-[#263128] transition hover:-translate-y-0.5 hover:bg-[#ffd36b]"
            >
              <Eye size={17} /> Verify with PBAG
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
