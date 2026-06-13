"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { useLanguage } from "@/components/LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <>
      <section id="about" className="section-y bg-[#fffaf0]">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionReveal>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9342b]">{t.about.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#56645a]">
              {t.about.paragraphs[0]}
            </p>
            <p className="mt-4 text-lg leading-8 text-[#56645a]">
              {t.about.paragraphs[1]}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[#e8ddc7] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-[#138a3d]">{t.about.missionTitle}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#66746a]">{t.about.missionText}</p>
              </div>
              <div className="rounded-lg border border-[#e8ddc7] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-[#d9342b]">{t.about.visionTitle}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#66746a]">{t.about.visionText}</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="grid gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
              <Image src="/images/classroom-learning.webp" alt="Classroom learning at PBAG" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
              <Image src="/images/school-building.webp" alt="PBAG school building" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="why" className="section-y bg-white">
        <div className="section-shell">
          <SectionReveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#138a3d]">{t.about.whyEyebrow}</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">{t.about.whyTitle}</h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.whyCards.map((card, index) => (
              <SectionReveal key={card.title} delay={index * 0.08}>
                <article className="h-full rounded-lg border border-[#e8ddc7] bg-[#fffaf0] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#138a3d] text-white">
                    <card.icon size={23} />
                  </div>
                  <h3 className="text-xl font-black text-[#263128]">{card.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#5d6b61]">{card.description}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
