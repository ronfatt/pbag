"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyAccountButtonProps = {
  accountNumber: string;
  className?: string;
};

export function CopyAccountButton({ accountNumber, className = "" }: CopyAccountButtonProps) {
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);

  async function copyAccountNumber() {
    const cleanAccountNumber = accountNumber.replaceAll(" ", "");

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(cleanAccountNumber);
      } else {
        const input = document.createElement("textarea");
        input.value = cleanAccountNumber;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }

      setCopied(true);
      setCopyFailed(false);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopyFailed(true);
      window.setTimeout(() => setCopyFailed(false), 2200);
    }
  }

  return (
    <button
      type="button"
      onClick={copyAccountNumber}
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#f4bd45] px-4 py-3 text-sm font-black text-[#263128] transition hover:bg-[#ffd36b] ${className}`}
    >
      {copied ? <Check size={17} /> : <Copy size={17} />}
      {copied ? "Copied" : copyFailed ? "Copy unavailable" : "Copy Account Number"}
    </button>
  );
}
