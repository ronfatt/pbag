import Image from "next/image";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { Stats } from "@/components/Stats";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-[#0b2d18] text-white">
      <Image
        src="/images/hero-students.jpg"
        alt="PBAG students learning together"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,37,20,0.88),rgba(9,37,20,0.58),rgba(9,37,20,0.22)),linear-gradient(0deg,rgba(9,37,20,0.72),transparent_45%)]" />
      <div className="section-shell relative z-10 flex min-h-[760px] flex-col justify-center pb-36 pt-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-sm font-bold backdrop-blur">
            <HeartHandshake size={17} /> Grace Training Centre, Tawau
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            Give Every Child A Chance To Learn
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
            PBAG provides alternative education for undocumented children in Tawau, helping them build confidence, skills, and a better future.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#sponsor"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#f4bd45] px-7 py-4 text-base font-black text-[#263128] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#ffd36b]"
            >
              Sponsor A Child <ArrowRight size={19} />
            </a>
            <a
              href="#give"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-white/35 bg-white/12 px-7 py-4 text-base font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/22"
            >
              Make A Donation
            </a>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
