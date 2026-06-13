"use client";

import Image from "next/image";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { CopyAccountButton } from "@/components/CopyAccountButton";
import { useLanguage } from "@/components/LanguageProvider";
import { donation } from "@/data/siteContent";

export function DonationStrip() {
  const { t } = useLanguage();

  return (
    <section id="quick-donate" className="bg-white">
      <div className="section-shell -mt-10 relative z-20">
        <div className="grid gap-5 rounded-lg border border-[#e8ddc7] bg-white p-4 shadow-2xl lg:grid-cols-[auto_1fr_auto] lg:items-center md:p-5">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-[#f0e3c8] bg-[#fffaf0]">
              <Image src="/images/qr-donation.png" alt="PBAG DuitNow donation QR code" fill className="object-contain p-1" sizes="80px" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#d9342b]">{t.quickDonate.eyebrow}</p>
              <h2 className="mt-1 text-xl font-black text-[#263128]">Public Bank: {donation.accountNo}</h2>
              <p className="mt-1 text-sm font-semibold text-[#66746a]">{donation.accountName}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold leading-6 text-[#56645a]">
              {t.quickDonate.description}
            </p>
            <ol className="mt-3 grid gap-2 sm:grid-cols-3">
              {t.quickDonate.steps.map((step, index) => (
                <li key={step} className="flex items-center gap-2 rounded-md bg-[#fffaf0] px-3 py-2 text-xs font-black text-[#263128]">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#138a3d] text-[11px] text-white">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row md:justify-end">
            <CopyAccountButton accountNumber={donation.accountNo} />
            <a
              href="https://wa.me/60198088281"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#138a3d] px-4 py-3 text-sm font-black text-white transition hover:bg-[#0f7332]"
            >
              <MessageCircle size={17} /> {t.quickDonate.whatsapp}
            </a>
          </div>
          <div className="rounded-md bg-[#eef8ef] px-3 py-2 text-xs font-bold leading-5 text-[#138a3d] lg:col-span-3">
            <CheckCircle2 size={15} className="mr-1 inline-block align-[-2px]" />
            {donation.bank} / {donation.accountName}
          </div>
        </div>
      </div>
    </section>
  );
}
