import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { updates } from "@/data/siteContent";

export function ImpactUpdates() {
  return (
    <section id="impact" className="bg-[#fffaf0] py-24">
      <div className="section-shell">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9342b]">Impact & updates</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">
              Recent Impact & Community Updates
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#56645a]">
            PBAG grows through steady acts of care: teacher training, health visits, practical skills, and partners who show up for the children.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {updates.map((update, index) => (
            <SectionReveal key={update.title} delay={index * 0.06}>
              <article className="h-full overflow-hidden rounded-lg border border-[#e8ddc7] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[16/9]">
                  <Image src={update.image} alt={update.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="p-6">
                  <p className="text-sm font-black text-[#138a3d]">{update.date}</p>
                  <h3 className="mt-2 text-xl font-black text-[#263128]">{update.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-[#66746a]">{update.description}</p>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
