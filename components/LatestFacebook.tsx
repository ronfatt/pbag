"use client";

import { ExternalLink, Loader2, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SectionReveal } from "@/components/SectionReveal";
import { useLanguage } from "@/components/LanguageProvider";

const facebookPageUrl = "https://www.facebook.com/gtctawau";
const pluginUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  facebookPageUrl
)}&tabs=timeline&width=500&height=620&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

export function LatestFacebook() {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="facebook" className="section-y bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionReveal>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#138a3d]">{t.facebook.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">
            {t.facebook.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#56645a]">
            {t.facebook.intro}
          </p>
          <p className="mt-4 rounded-lg bg-[#eef8ef] px-4 py-3 text-sm font-bold leading-6 text-[#138a3d]">
            {t.facebook.note}
          </p>
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#1877f2] px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-900/10 transition hover:-translate-y-1 hover:bg-[#0f66d4]"
          >
            <Share2 size={18} /> {t.facebook.follow} <ExternalLink size={16} />
          </a>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="overflow-hidden rounded-lg border border-[#e8ddc7] bg-[#f7f7f7] p-3 shadow-xl">
            {loaded ? (
              <div className="mx-auto min-h-[620px] w-full max-w-[500px] overflow-hidden rounded-md bg-white">
                <iframe
                  title="PBAG Facebook page latest posts"
                  src={pluginUrl}
                  width="500"
                  height="620"
                  style={{ border: "none", overflow: "hidden", width: "100%" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="rounded-md bg-white p-4">
                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    { src: "/images/suhakam-visit.webp", alt: "SUHAKAM visit to PBAG" },
                    { src: "/images/preschool-workshop-2026.webp", alt: "PBAG preschool workshop" },
                    { src: "/images/medical-camp-community.webp", alt: "PBAG medical camp" }
                  ].map((image) => (
                    <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#fffaf0]">
                      <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 12vw, 33vw" />
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-lg border border-[#e8ddc7] bg-[#fffaf0] p-5">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1877f2] text-white">
                      <Share2 size={21} />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-black text-[#263128]">Grace Training Centre, Tawau</p>
                      <p className="mt-1 text-xs font-bold text-[#66746a]">{t.facebook.previewLabel}</p>
                      <p className="mt-3 text-sm font-semibold leading-6 text-[#56645a]">
                        {t.facebook.previewText}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLoaded(true)}
                  className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1877f2] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#0f66d4]"
                >
                  <Loader2 size={17} /> {t.facebook.load}
                </button>
                <p className="mt-3 text-center text-xs font-semibold leading-5 text-[#66746a]">
                  {t.facebook.loadNote}
                </p>
              </div>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
