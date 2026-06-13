"use client";

import { SectionReveal } from "@/components/SectionReveal";
import { ProgramExplorer } from "@/components/ProgramExplorer";
import { useLanguage } from "@/components/LanguageProvider";

export function Programs() {
  const { t } = useLanguage();

  return (
    <section id="programs" className="section-y bg-[#fffaf0]">
      <div className="section-shell">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9342b]">{t.programs.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">{t.programs.title}</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#56645a]">
            {t.programs.intro}
          </p>
        </SectionReveal>

        <ProgramExplorer />
      </div>
    </section>
  );
}
