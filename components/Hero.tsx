"use client";

import Image from "next/image";
import { ArrowRight, BadgeDollarSign, HeartHandshake } from "lucide-react";
import { Stats } from "@/components/Stats";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[740px] overflow-hidden bg-[#0b2d18] text-white">
      <Image
        src="/images/classroom-learning.webp"
        alt="PBAG students learning together in a classroom"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,37,20,0.94),rgba(9,37,20,0.68),rgba(9,37,20,0.18)),linear-gradient(0deg,rgba(9,37,20,0.76),transparent_48%)]" />
      <div className="section-shell relative z-10 flex min-h-[740px] flex-col justify-center pb-36 pt-28">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur">
            <HeartHandshake size={17} /> {t.hero.registered}
          </p>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f4bd45] px-4 py-2 text-sm font-black text-[#263128] shadow-xl shadow-black/20 sm:ml-3">
            <BadgeDollarSign size={17} /> {t.hero.badge}
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/88 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <p className="mt-4 max-w-xl text-sm font-bold uppercase tracking-[0.12em] text-[#f4bd45]">
            {t.hero.supportLine}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#sponsor"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#f4bd45] px-7 py-4 text-base font-black text-[#263128] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#ffd36b]"
            >
              {t.hero.sponsorCta} <ArrowRight size={19} />
            </a>
            <a
              href="#give"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/35 bg-white/12 px-7 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/22"
            >
              {t.hero.donateCta}
            </a>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
