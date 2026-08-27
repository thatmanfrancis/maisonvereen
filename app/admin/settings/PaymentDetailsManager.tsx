"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Check, AlertCircle, CreditCard } from "lucide-react";

type PaymentSettings = {
  bankName: string;
  accountName: string;
  accountNumber: string;
  paymentNote: string;
  releaseLabel: string;
  releaseDate: string;
  amountNaira: string;
  foundingDeadline: string;
  collectorsDeadline: string;
  houseDeadline: string;
};

const EMPTY: PaymentSettings = {
  bankName: "",
  accountName: "",
  accountNumber: "",
  paymentNote: "",
  releaseLabel: "Edition One — 2027",
  releaseDate: "29 May 2027",
  amountNaira: "430000",
  foundingDeadline: "2 weeks",
  collectorsDeadline: "1 month",
  houseDeadline: "1 month 2 weeks",
};

export default function PaymentDetailsManager() {
  const [form, setForm] = useState<PaymentSettings>(EMPTY);
  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full bg-transparent border-b border-white/8 py-3 text-xs text-[#E8E2D9] placeholder-[#2A2420] focus:outline-none focus:border-gold/50 transition-colors duration-300";

  useEffect(() => {
    fetch("/api/admin/payment-settings")
      .then((res) => res.json())
      .then((data) => {
        if (data.settings) {
          setForm({
            bankName: data.settings.bankName ?? "",
            accountName: data.settings.accountName ?? "",
            accountNumber: data.settings.accountNumber ?? "",
            paymentNote: data.settings.paymentNote ?? "",
            releaseLabel: data.settings.releaseLabel ?? EMPTY.releaseLabel,
            releaseDate: data.settings.releaseDate ?? EMPTY.releaseDate,
            amountNaira: String(data.settings.amountNaira ?? 430000),
            foundingDeadline:
              data.settings.foundingDeadline ?? EMPTY.foundingDeadline,
            collectorsDeadline:
              data.settings.collectorsDeadline ?? EMPTY.collectorsDeadline,
            houseDeadline: data.settings.houseDeadline ?? EMPTY.houseDeadline,
          });
        }
      })
      .catch(() => setError("Could not load settings."))
      .finally(() => setFetching(false));
  }, []);

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);
    try {
      const res = await fetch("/api/admin/payment-settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          amountNaira: Number(form.amountNaira.replace(/,/g, "")) || 0,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Could not save settings.");
        return;
      }
      setForm({
        bankName: data.settings.bankName ?? "",
        accountName: data.settings.accountName ?? "",
        accountNumber: data.settings.accountNumber ?? "",
        paymentNote: data.settings.paymentNote ?? "",
        releaseLabel: data.settings.releaseLabel ?? EMPTY.releaseLabel,
        releaseDate: data.settings.releaseDate ?? EMPTY.releaseDate,
        amountNaira: String(data.settings.amountNaira ?? 430000),
        foundingDeadline:
          data.settings.foundingDeadline ?? EMPTY.foundingDeadline,
        collectorsDeadline:
          data.settings.collectorsDeadline ?? EMPTY.collectorsDeadline,
        houseDeadline: data.settings.houseDeadline ?? EMPTY.houseDeadline,
      });
      setSuccess(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function setField(key: keyof PaymentSettings, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="border border-white/[0.07] bg-[#0D0D0D] p-6 space-y-6">
      <div className="flex items-start gap-3">
        <CreditCard className="w-4 h-4 text-gold mt-0.5 shrink-0" />
        <div className="space-y-1">
          <h2 className="font-serif text-lg text-[#E8E2D9] font-light">
            Release &amp; Payment Defaults
          </h2>
          <p className="text-xs text-[#6A6258] leading-relaxed">
            Bank details and default amount / deadlines used in emails. On each
            application you can keep these defaults or enter custom values.
          </p>
        </div>
      </div>

      {fetching ? (
        <p className="text-xs text-[#6A6258]">Loading…</p>
      ) : (
        <form onSubmit={handleSave} className="space-y-8">
          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              Release
            </p>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                Release label
              </span>
              <input
                className={inputClass}
                value={form.releaseLabel}
                onChange={(e) => setField("releaseLabel", e.target.value)}
                placeholder="Edition One — 2027"
              />
            </label>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                Release date
              </span>
              <input
                className={inputClass}
                value={form.releaseDate}
                onChange={(e) => setField("releaseDate", e.target.value)}
                placeholder="29 May 2027"
              />
            </label>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                Default amount (naira)
              </span>
              <input
                className={inputClass}
                value={form.amountNaira}
                onChange={(e) => setField("amountNaira", e.target.value)}
                placeholder="430000"
              />
            </label>
          </div>

          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              Default payment deadlines by circle
            </p>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                Founding Circle
              </span>
              <input
                className={inputClass}
                value={form.foundingDeadline}
                onChange={(e) => setField("foundingDeadline", e.target.value)}
                placeholder="2 weeks"
              />
            </label>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                Collectors Circle
              </span>
              <input
                className={inputClass}
                value={form.collectorsDeadline}
                onChange={(e) => setField("collectorsDeadline", e.target.value)}
                placeholder="1 month"
              />
            </label>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                House Circle
              </span>
              <input
                className={inputClass}
                value={form.houseDeadline}
                onChange={(e) => setField("houseDeadline", e.target.value)}
                placeholder="1 month 2 weeks"
              />
            </label>
          </div>

          <div className="space-y-5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
              Bank account
            </p>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                Bank Name
              </span>
              <input
                className={inputClass}
                value={form.bankName}
                onChange={(e) => setField("bankName", e.target.value)}
                placeholder="e.g. Providus Bank"
              />
            </label>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                Account Name
              </span>
              <input
                className={inputClass}
                value={form.accountName}
                onChange={(e) => setField("accountName", e.target.value)}
                placeholder="e.g. Maison Vereen Ltd"
              />
            </label>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                Account Number
              </span>
              <input
                className={inputClass}
                value={form.accountNumber}
                onChange={(e) => setField("accountNumber", e.target.value)}
                placeholder="e.g. 0123456789"
              />
            </label>
            <label className="block space-y-1">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
                Note to applicant{" "}
                <span className="normal-case tracking-normal text-[#3A3530]">
                  (optional)
                </span>
              </span>
              <textarea
                rows={3}
                className={`${inputClass} resize-none leading-relaxed`}
                value={form.paymentNote}
                onChange={(e) => setField("paymentNote", e.target.value)}
                placeholder="e.g. Please use your full name as the transfer reference."
              />
            </label>
          </div>

          {error && (
            <p className="flex items-center gap-2 text-xs text-red-400">
              <AlertCircle className="w-3.5 h-3.5" />
              {error}
            </p>
          )}
          {success && (
            <p className="flex items-center gap-2 text-xs text-emerald-400">
              <Check className="w-3.5 h-3.5" />
              Settings saved.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 border border-gold/40 text-gold text-[10px] uppercase tracking-[0.22em] hover:bg-gold/10 disabled:opacity-50 transition-colors"
          >
            {loading ? "Saving…" : "Save Settings"}
          </button>
        </form>
      )}
    </div>
  );
}
