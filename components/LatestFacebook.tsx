import { ExternalLink, Share2 } from "lucide-react";
import { SectionReveal } from "@/components/SectionReveal";

const facebookPageUrl = "https://www.facebook.com/gtctawau";
const pluginUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  facebookPageUrl
)}&tabs=timeline&width=500&height=620&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

export function LatestFacebook() {
  return (
    <section id="facebook" className="bg-white py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionReveal>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#138a3d]">Latest updates</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">
            Latest From Facebook
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#56645a]">
            Follow PBAG's active Facebook page for the newest classroom moments, community visits, health programs, and volunteer stories.
          </p>
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#1877f2] px-6 py-4 text-sm font-black text-white shadow-lg shadow-blue-900/10 transition hover:-translate-y-1 hover:bg-[#0f66d4]"
          >
            <Share2 size={18} /> Follow PBAG on Facebook <ExternalLink size={16} />
          </a>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="overflow-hidden rounded-lg border border-[#e8ddc7] bg-[#f7f7f7] p-3 shadow-xl">
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
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
