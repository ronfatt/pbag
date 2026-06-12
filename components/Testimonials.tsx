import Image from "next/image";
import { Quote } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { testimonials } from "@/data/siteContent";

export function Testimonials() {
  return (
    <section id="volunteer" className="section-y bg-white">
      <div className="section-shell">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#138a3d]">Volunteer voices</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">Volunteer Testimonials</h2>
          </div>
          <div className="relative aspect-[16/8] overflow-hidden rounded-lg shadow-xl">
            <Image src="/images/baking-volunteers.webp" alt="PBAG volunteers and students after a baking skills session" fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
          </div>
        </SectionReveal>

        <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <SectionReveal key={item.name} delay={index * 0.06} className="min-w-[280px] snap-start">
              <article className="h-full rounded-lg border border-[#e8ddc7] bg-[#fffaf0] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Quote className="text-[#d9342b]" size={30} />
                <p className="mt-5 text-base font-bold leading-7 text-[#3e4b42]">"{item.quote}"</p>
                <p className="mt-6 text-sm font-black text-[#138a3d]">{item.name}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
