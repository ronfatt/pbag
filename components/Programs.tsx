import { SectionReveal } from "@/components/SectionReveal";
import { ProgramExplorer } from "@/components/ProgramExplorer";

export function Programs() {
  return (
    <section id="programs" className="section-y bg-[#fffaf0]">
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

        <ProgramExplorer />
      </div>
    </section>
  );
}
