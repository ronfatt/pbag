import { Globe2, MapPinned, MessageCircle, Share2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { contact } from "@/data/siteContent";

export function Contact() {
  return (
    <section id="contact" className="bg-[#fffaf0] py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9342b]">Visit / Contact</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">Visit PBAG or Get In Touch</h2>
          <p className="mt-5 text-lg leading-8 text-[#56645a]">To request a visit to our centre, please contact us.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#138a3d] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#0b6e31]"
            >
              <MessageCircle size={18} /> WhatsApp Madam Esther
            </a>
            <a
              href="mailto:gtctawau@gmail.com"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-[#d6c9ad] bg-white px-6 py-4 text-sm font-black text-[#263128] transition hover:-translate-y-1 hover:border-[#f4bd45]"
            >
              Email PBAG
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contact.contactCards.map((card) => (
              <div key={card.label} className="rounded-lg border border-[#e8ddc7] bg-white p-5 shadow-sm">
                <card.icon className="text-[#138a3d]" size={23} />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-[#8a7760]">{card.label}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-[#354339]">{card.value}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="rounded-lg bg-white p-6 shadow-xl">
            <div className="space-y-5 text-sm font-semibold leading-7 text-[#526156]">
              <p><strong className="text-[#263128]">Phone / WhatsApp:</strong> {contact.phoneLabel}</p>
              <p className="flex items-center gap-2"><Globe2 size={17} className="text-[#138a3d]" /> {contact.website}</p>
              <p className="flex items-center gap-2"><Share2 size={17} className="text-[#138a3d]" /> {contact.facebook}</p>
              <p><strong className="text-[#263128]">Email:</strong> {contact.email}</p>
              <p><strong className="text-[#263128]">Address:</strong><br />{contact.address}</p>
              <p><strong className="text-[#263128]">P.O. Box:</strong><br />{contact.poBox}</p>
            </div>
            <div className="mt-6 flex min-h-[260px] items-center justify-center rounded-lg border border-dashed border-[#cdbf9f] bg-[#fffaf0] p-6 text-center">
              <div>
                <MapPinned className="mx-auto text-[#d9342b]" size={36} />
                <p className="mt-4 text-lg font-black text-[#263128]">Google Map Embed Placeholder</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#66746a]">Replace this block with a map embed for PBAG, Tawau.</p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
