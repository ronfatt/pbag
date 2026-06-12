"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navItems } from "@/data/siteContent";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/94 shadow-sm backdrop-blur-xl" : "bg-black/18 backdrop-blur-sm"
        }`}
      >
        <nav className="section-shell flex h-20 items-center justify-between gap-5">
          <a href="#home" className="focus-ring flex items-center gap-3 rounded-md" aria-label="PBAG home">
            <Image
              src="/images/pbag-logo.png"
              alt="Pusat Bimbingan Alternatif Grace logo"
              width={58}
              height={58}
              className="h-14 w-14 rounded-full bg-white object-contain p-1 shadow-sm"
              priority
            />
            <span className={`hidden text-sm font-bold leading-tight sm:block ${scrolled ? "text-[#263128]" : "text-white"}`}>
              PBAG
              <span className="block text-xs font-medium opacity-80">Grace Training Centre</span>
            </span>
          </a>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md text-sm font-semibold transition hover:text-[#138a3d] ${
                  scrolled ? "text-[#36443a]" : "text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className={`rounded-full border px-3 py-2 text-xs font-bold ${scrolled ? "border-[#dce8dd] text-[#506253]" : "border-white/35 text-white"}`}>
              EN | BM | 中文
            </div>
            <a
              href="#give"
              className="focus-ring rounded-full bg-[#d9342b] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/15 transition hover:-translate-y-0.5 hover:bg-[#bb2821]"
            >
              Donate
            </a>
            <a
              href="#sponsor"
              className="focus-ring rounded-full bg-[#f4bd45] px-5 py-3 text-sm font-bold text-[#263128] shadow-lg shadow-yellow-900/10 transition hover:-translate-y-0.5 hover:bg-[#e5ad35]"
            >
              Sponsor A Child
            </a>
          </div>

          <button
            type="button"
            className={`focus-ring rounded-full p-3 lg:hidden ${scrolled ? "bg-[#f4f0e7] text-[#263128]" : "bg-white/15 text-white"}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {open ? (
          <div className="border-t border-[#e6e0d1] bg-white px-5 py-5 shadow-xl lg:hidden">
            <div className="mx-auto flex max-w-md flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-bold text-[#263128] transition hover:bg-[#fff4dc]"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2 text-xs font-bold text-[#66746a]">EN | BM | 中文</div>
            </div>
          </div>
        ) : null}
      </header>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/30 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <a href="#give" className="mx-1 rounded-full bg-[#d9342b] px-4 py-3 text-center text-sm font-bold text-white">
          Donate
        </a>
        <a href="#sponsor" className="mx-1 rounded-full bg-[#f4bd45] px-4 py-3 text-center text-sm font-bold text-[#263128]">
          Sponsor
        </a>
      </div>
    </>
  );
}
