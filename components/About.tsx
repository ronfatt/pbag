import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { whyCards } from "@/data/siteContent";

export function About() {
  return (
    <>
      <section id="about" className="section-y bg-[#fffaf0]">
        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <SectionReveal>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9342b]">About PBAG</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">
              About Pusat Bimbingan Alternatif Grace
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#56645a]">
              Pusat Bimbingan Alternatif Grace (PBAG), also known as Grace Training Centre, is located at Mile 5.5 Jalan Apas, Tawau. Registered by the Ministry of Education in Putrajaya on 15 June 2015, PBAG provides alternative education for undocumented children who face limited access to formal schooling.
            </p>
            <p className="mt-4 text-lg leading-8 text-[#56645a]">
              Since its beginning, PBAG has served hundreds of children. In 2023, student numbers grew by 70% to 728 students, with many more still waiting for a place. Through education, skills training, and community support, PBAG helps children grow into responsible and capable individuals.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[#e8ddc7] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-[#138a3d]">Every child has the right to education.</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#66746a]">This mission guides each class, meal, skill lesson, and community visit.</p>
              </div>
              <div className="rounded-lg border border-[#e8ddc7] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-[#d9342b]">Nurture children with knowledge, values, and practical skills.</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#66746a]">So they can contribute positively to the Tawau community.</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="grid gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
              <Image src="/images/classroom-learning.jpg" alt="Classroom learning at PBAG" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
              <Image src="/images/school-building.jpg" alt="PBAG school building" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section id="why" className="section-y bg-white">
        <div className="section-shell">
          <SectionReveal className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#138a3d]">Why it matters</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">Why Your Support Matters</h2>
          </SectionReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {whyCards.map((card, index) => (
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
