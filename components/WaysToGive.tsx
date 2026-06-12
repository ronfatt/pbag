import Image from "next/image";
import { MessageCircle, QrCode } from "lucide-react";
import { CopyAccountButton } from "@/components/CopyAccountButton";
import { SectionReveal } from "@/components/SectionReveal";
import { donation, givingOptions } from "@/data/siteContent";

export function WaysToGive() {
  const quickAmounts = ["RM50", "RM100", "RM300", "RM700", "RM1000"];

  return (
    <section id="give" className="section-y bg-white">
      <div className="section-shell">
        <SectionReveal className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#138a3d]">Ways to give</p>
          <h2 className="mt-3 text-4xl font-black tracking-normal text-[#263128] sm:text-5xl">Ways You Can Help</h2>
        </SectionReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {givingOptions.map((option, index) => (
            <SectionReveal key={option.title} delay={index * 0.06}>
              <article className="h-full rounded-lg border border-[#e8ddc7] bg-[#fffaf0] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d9342b] text-white">
                  <option.icon size={22} />
                </div>
                <h3 className="text-lg font-black text-[#263128]">{option.title}</h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#66746a]">{option.description}</p>
              </article>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="mt-10 grid gap-8 rounded-lg bg-[#113f25] p-6 text-white shadow-2xl md:p-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4bd45]">Donation details</p>
            <h3 className="mt-3 text-3xl font-black">Give in the way that works for you</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {quickAmounts.map((amount) => (
                <a
                  key={amount}
                  href="#contact"
                  className="focus-ring rounded-full border border-white/18 bg-white/10 px-4 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:border-[#f4bd45] hover:bg-[#f4bd45] hover:text-[#263128]"
                >
                  {amount}
                </a>
              ))}
            </div>
            <dl className="mt-7 grid gap-4 text-sm">
              <div className="rounded-lg bg-white/10 p-4">
                <dt className="font-bold text-white/68">Cash</dt>
                <dd className="mt-1 font-black">Accepted at PBAG by arrangement</dd>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <dt className="font-bold text-white/68">Cheque payable to</dt>
                <dd className="mt-1 font-black">{donation.chequePayableTo}</dd>
              </div>
              <div className="rounded-lg bg-white p-4 text-[#263128]">
                <dt className="font-black text-[#138a3d]">Online Funds Transfer</dt>
                <dd className="mt-3 grid gap-2 font-bold">
                  <span>{donation.bank}</span>
                  <span>Account No: {donation.accountNo}</span>
                  <span>Account Name: {donation.accountName}</span>
                </dd>
                <CopyAccountButton accountNumber={donation.accountNo} className="mt-4" />
                <a
                  href="https://wa.me/60198088281"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring ml-0 mt-3 inline-flex items-center gap-2 rounded-full border border-[#138a3d]/20 px-4 py-3 text-sm font-black text-[#138a3d] transition hover:bg-[#eef8ef] sm:ml-2"
                >
                  <MessageCircle size={17} /> WhatsApp after donation
                </a>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <dt className="font-bold text-white/68">International Transfer</dt>
                <dd className="mt-1 font-black">SWIFT Code / BIC: {donation.swift}</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col justify-center rounded-lg bg-[#fffaf0] p-6 text-center text-[#263128]">
            <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#d9342b] text-white">
              <QrCode size={23} />
            </div>
            <h3 className="text-2xl font-black">Scan for e-donation</h3>
            <div className="relative mx-auto mt-5 aspect-[3/4] w-full max-w-[300px] overflow-hidden rounded-lg bg-white shadow-lg">
              <Image src="/images/qr-donation.png" alt="PBAG DuitNow donation QR code" fill className="object-contain p-2" sizes="300px" />
            </div>
            <p className="mx-auto mt-5 max-w-sm text-sm font-semibold leading-6 text-[#66746a]">
              After transferring, send the receipt by WhatsApp so PBAG can acknowledge your support.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
