import Image from "next/image";
import { navItems } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="bg-[#102319] pb-24 pt-14 text-white md:pb-8">
      <div className="section-shell">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/pbag-logo.png" alt="PBAG logo" width={64} height={64} className="rounded-full bg-white p-1" />
              <div>
                <p className="font-black">Pusat Bimbingan Alternatif Grace</p>
                <p className="text-sm font-semibold text-white/68">Grace Training Centre, Tawau</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm font-semibold leading-7 text-white/72">
              Giving every child a chance to life through education, care, and community support.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {["About", "Programs", "Sponsor", "Donate", "Contact"].map((label) => {
              const href = label === "Donate" ? "#give" : navItems.find((item) => item.label === label)?.href ?? "#contact";
              return (
                <a key={label} href={href} className="rounded-md py-2 text-sm font-bold text-white/72 transition hover:text-[#f4bd45]">
                  {label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-10 border-t border-white/12 pt-6 text-sm font-semibold text-white/56">
          © 2026 Pusat Bimbingan Alternatif Grace. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
