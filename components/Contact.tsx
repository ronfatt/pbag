"use client";

import { Globe2, MessageCircle, Share2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { useLanguage } from "@/components/LanguageProvider";
import { contact } from "@/data/siteContent";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-y bg-[#fffaf0]">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionReveal>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9342b]">{t.contactSection.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">{t.contactSection.title}</h2>
          <p className="mt-5 text-lg leading-8 text-[#56645a]">{t.contactSection.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#138a3d] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#0b6e31]"
            >
              <MessageCircle size={18} /> {t.contactSection.whatsapp}
            </a>
            <a
              href="mailto:gtctawau@gmail.com"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-[#d6c9ad] bg-white px-6 py-4 text-sm font-black text-[#263128] transition hover:-translate-y-1 hover:border-[#f4bd45]"
            >
              {t.contactSection.emailButton}
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {t.contactCards.map((card) => (
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
              <p><strong className="text-[#263128]">{t.contactSection.phone}</strong> {contact.phoneLabel}</p>
              <p className="flex items-center gap-2"><Globe2 size={17} className="text-[#138a3d]" /> {contact.website}</p>
              <p className="flex items-center gap-2"><Share2 size={17} className="text-[#138a3d]" /> {contact.facebook}</p>
              <p><strong className="text-[#263128]">{t.contactSection.email}</strong> {contact.email}</p>
              <p><strong className="text-[#263128]">{t.contactSection.address}</strong><br />{contact.address}</p>
              <p><strong className="text-[#263128]">{t.contactSection.poBox}</strong><br />{contact.poBox}</p>
            </div>
            <div className="mt-6 overflow-hidden rounded-lg border border-[#e8ddc7] bg-[#fffaf0] shadow-sm">
              <iframe
                title="Pusat Bimbingan Alternatif Grace location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.816823308398!2d117.94987957666143!3d4.255854845349864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3215774cebea0bbb%3A0x30c42237a760b2d0!2sPusat%20Bimbingan%20Alternatif%20Grace!5e0!3m2!1sen!2smy!4v1781263276063!5m2!1sen!2smy"
                className="block aspect-[4/3] w-full md:aspect-[16/10]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
