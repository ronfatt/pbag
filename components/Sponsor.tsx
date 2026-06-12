import { CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";
import { sponsorships } from "@/data/siteContent";

export function Sponsor() {
  return (
    <section id="sponsor" className="section-y bg-[#113f25] text-white">
      <div className="section-shell">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4bd45]">Sponsor a child</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">Sponsor A Child's Education</h2>
          <p className="mt-5 text-lg leading-8 text-white/78">
            Your sponsorship helps cover school fees, books, uniforms, learning materials, and basic education support.
          </p>
        </SectionReveal>

        <div className="mx-auto mt-11 grid max-w-4xl gap-6 md:grid-cols-2">
          {sponsorships.map((plan, index) => (
            <SectionReveal key={plan.title} delay={index * 0.1}>
              <article className="flex h-full min-h-[470px] flex-col rounded-lg bg-white p-7 text-[#263128] shadow-2xl transition hover:-translate-y-1">
                <div className="min-h-[72px]">
                  <h3 className="max-w-[15ch] text-2xl font-black leading-tight sm:max-w-none">{plan.title}</h3>
                </div>
                <div className="mt-4 flex min-h-[72px] items-end gap-2">
                  <span className="text-5xl font-black leading-none text-[#138a3d]">{plan.price}</span>
                  <span className="pb-2 text-base font-bold text-[#66746a]">{plan.period}</span>
                </div>
                <ul className="mt-7 flex-1 space-y-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-[#526156]">
                      <CheckCircle2 className="shrink-0 text-[#138a3d]" size={19} /> {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="focus-ring mt-8 inline-flex min-h-[56px] w-full items-center justify-center rounded-full bg-[#d9342b] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#bb2821]"
                >
                  {plan.button}
                </a>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl rounded-lg border border-white/15 bg-white/10 p-5 text-center text-sm font-semibold leading-7 text-white/82">
            You may sponsor one or more students. Monthly and one-off giving options are also welcome.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
