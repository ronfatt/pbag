import Image from "next/image";
import { SectionReveal } from "@/components/SectionReveal";
import { programs } from "@/data/siteContent";

export function Programs() {
  return (
    <section id="programs" className="bg-[#fffaf0] py-24">
      <div className="section-shell">
        <SectionReveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9342b]">Programs</p>
            <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">What Students Learn At PBAG</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#56645a]">
            PBAG combines academic subjects, practical skills, moral values, and health support so students can grow with confidence inside and outside the classroom.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionReveal className="grid gap-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <Image src="/images/culinary-class.jpg" alt="Students learning culinary skills" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-lg">
              <Image src="/images/computer-class.jpg" alt="Computer literacy class at PBAG" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
            </div>
          </SectionReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {programs.map((program, index) => (
              <SectionReveal key={program.title} delay={index * 0.025}>
                <article className="h-full rounded-lg border border-[#e8ddc7] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#f4bd45] hover:shadow-lg">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#fff4dc] text-[#138a3d]">
                    <program.icon size={21} />
                  </div>
                  <h3 className="font-black text-[#263128]">{program.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-[#66746a]">{program.description}</p>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
