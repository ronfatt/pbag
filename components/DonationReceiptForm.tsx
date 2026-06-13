"use client";

import { FormEvent, useEffect, useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

type ReceiptFormState = {
  name: string;
  amount: string;
  method: string;
  reference: string;
  message: string;
};

const initialState: ReceiptFormState = {
  name: "",
  amount: "",
  method: "Online Funds Transfer",
  reference: "",
  message: ""
};

export function DonationReceiptForm() {
  const [form, setForm] = useState(initialState);
  const { t } = useLanguage();

  useEffect(() => {
    setForm((current) => {
      if (t.receipt.methods.includes(current.method as never)) {
        return current;
      }

      return { ...current, method: t.receipt.methods[0] };
    });
  }, [t.receipt.methods]);

  function updateField(field: keyof ReceiptFormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submitReceipt(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const receiptMessage = [
      t.receipt.whatsappMessage.intro,
      "",
      `${t.receipt.whatsappMessage.name}: ${form.name || "-"}`,
      `${t.receipt.whatsappMessage.amount}: RM${form.amount || "-"}`,
      `${t.receipt.whatsappMessage.method}: ${form.method}`,
      `${t.receipt.whatsappMessage.reference}: ${form.reference || "-"}`,
      form.message ? `${t.receipt.whatsappMessage.message}: ${form.message}` : null,
      "",
      t.receipt.whatsappMessage.attach
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/60198088281?text=${encodeURIComponent(receiptMessage)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submitReceipt} className="rounded-lg border border-[#e8ddc7] bg-[#fffaf0] p-5 shadow-sm md:p-6">
      <div className="flex items-start gap-3">
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#138a3d] text-white">
          <MessageCircle size={21} />
        </div>
        <div>
          <h3 className="text-2xl font-black text-[#263128]">{t.receipt.title}</h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-[#66746a]">
            {t.receipt.intro}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-black text-[#263128]">
          {t.receipt.donorName}
          <input
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="focus-ring rounded-md border border-[#e0d4bd] bg-white px-4 py-3 text-sm font-semibold text-[#263128]"
            placeholder={t.receipt.donorNamePlaceholder}
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#263128]">
          {t.receipt.amount}
          <input
            value={form.amount}
            onChange={(event) => updateField("amount", event.target.value)}
            inputMode="decimal"
            className="focus-ring rounded-md border border-[#e0d4bd] bg-white px-4 py-3 text-sm font-semibold text-[#263128]"
            placeholder="100"
          />
        </label>
        <label className="grid gap-2 text-sm font-black text-[#263128]">
          {t.receipt.method}
          <select
            value={form.method}
            onChange={(event) => updateField("method", event.target.value)}
            className="focus-ring rounded-md border border-[#e0d4bd] bg-white px-4 py-3 text-sm font-semibold text-[#263128]"
          >
            {t.receipt.methods.map((method) => (
              <option key={method}>{method}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-black text-[#263128]">
          {t.receipt.reference}
          <input
            value={form.reference}
            onChange={(event) => updateField("reference", event.target.value)}
            className="focus-ring rounded-md border border-[#e0d4bd] bg-white px-4 py-3 text-sm font-semibold text-[#263128]"
            placeholder={t.receipt.referencePlaceholder}
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-black text-[#263128]">
        {t.receipt.message}
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="focus-ring min-h-24 rounded-md border border-[#e0d4bd] bg-white px-4 py-3 text-sm font-semibold text-[#263128]"
          placeholder={t.receipt.messagePlaceholder}
        />
      </label>

      <button
        type="submit"
        className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d9342b] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#bb2821] sm:w-auto"
      >
        <Send size={17} /> {t.receipt.submit}
      </button>
    </form>
  );
}
