"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { useLanguage } from "@/components/LanguageProvider";
import { updates } from "@/data/siteContent";

export function ImpactUpdates() {
  const { t } = useLanguage();

  return (
    <section id="impact" className="section-y bg-[#fffaf0]">
      <div className="section-shell">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9342b]">{t.impact.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">
              {t.impact.title}
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#56645a]">
            {t.impact.intro}
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {updates.map((update, index) => {
            const translatedUpdate = t.impact.updates[index];
            return (
            <SectionReveal key={update.title} delay={index * 0.06}>
              <article className="h-full overflow-hidden rounded-lg border border-[#e8ddc7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/9]">
                  <Image src={update.image} alt={translatedUpdate.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-black text-[#138a3d]">{update.date}</p>
                  <h3 className="mt-2 text-xl font-black text-[#263128]">{translatedUpdate.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#66746a]">{translatedUpdate.description}</p>
                  <div className="mt-5 grid gap-3 border-t border-[#efe4cf] pt-5">
                    <p className="text-sm font-semibold leading-6 text-[#56645a]">
                      <strong className="text-[#263128]">{t.impact.why}</strong> {translatedUpdate.whyItMatters}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-[#56645a]">
                      <strong className="text-[#263128]">{t.impact.support}</strong> {translatedUpdate.supportHelps}
                    </p>
                  </div>
                </div>
              </article>
            </SectionReveal>
          );
          })}
        </div>
      </div>
    </section>
  );
}
