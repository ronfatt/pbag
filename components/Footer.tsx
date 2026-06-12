import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { CopyAccountButton } from "@/components/CopyAccountButton";
import { donation, navItems } from "@/data/siteContent";

export function Footer() {
  return (
    <footer className="bg-[#102319] pb-24 pt-14 text-white md:pb-8">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr_0.8fr]">
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
            <p className="mt-5 inline-flex rounded-full bg-[#f4bd45] px-4 py-2 text-sm font-black text-[#263128]">
              Sponsor from RM700/year
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#f4bd45]">Donate</p>
            <div className="mt-4 flex gap-4 rounded-lg border border-white/12 bg-white/8 p-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-white">
                <Image src="/images/qr-donation.png" alt="PBAG DuitNow donation QR code" fill className="object-contain p-1" sizes="96px" />
              </div>
              <div>
                <p className="text-sm font-bold text-white/70">{donation.bank}</p>
                <p className="mt-1 text-lg font-black">{donation.accountNo}</p>
                <p className="mt-1 text-xs font-semibold leading-5 text-white/58">{donation.accountName}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <CopyAccountButton accountNumber={donation.accountNo} className="w-full sm:w-auto" />
              <a
                href="https://wa.me/60198088281"
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/18 px-4 py-3 text-sm font-black text-white transition hover:bg-white/10"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 self-start">
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
