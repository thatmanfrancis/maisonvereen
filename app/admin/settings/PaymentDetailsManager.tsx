"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Check, AlertCircle, CreditCard } from "lucide-react";

type PaymentSettings = {
  bankName: string;
  accountName: string;
  accountNumber: string;
  paymentNote: string | null;
};

export default function PaymentDetailsManager() {
  const [form, setForm] = useState<PaymentSettings>({
    bankName: "",
    accountName: "",
    accountNumber: "",
    paymentNote: "",
  });
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
          });
        }
      })
      .catch(() => setError("Could not load payment details."))
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
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Could not save payment details.");
        return;
      }
      setForm({
        bankName: data.settings.bankName ?? "",
        accountName: data.settings.accountName ?? "",
        accountNumber: data.settings.accountNumber ?? "",
        paymentNote: data.settings.paymentNote ?? "",
      });
      setSuccess(true);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border border-white/[0.07] bg-[#0D0D0D] p-6 space-y-6">
      <div className="flex items-start gap-3">
        <CreditCard className="w-4 h-4 text-gold mt-0.5 shrink-0" />
        <div className="space-y-1">
          <h2 className="font-serif text-lg text-[#E8E2D9] font-light">
            Payment Account Details
          </h2>
          <p className="text-xs text-[#6A6258] leading-relaxed">
            These details are included in the email sent when an application is
            moved to Reviewing — so the applicant knows where to pay.
          </p>
        </div>
      </div>

      {fetching ? (
        <p className="text-xs text-[#6A6258]">Loading…</p>
      ) : (
        <form onSubmit={handleSave} className="space-y-5">
          <label className="block space-y-1">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
              Bank Name
            </span>
            <input
              className={inputClass}
              value={form.bankName}
              onChange={(e) => setForm({ ...form, bankName: e.target.value })}
              placeholder="e.g. Zenith Bank"
            />
          </label>
          <label className="block space-y-1">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#6A6258]">
              Account Name
            </span>
            <input
              className={inputClass}
              value={form.accountName}
              onChange={(e) => setForm({ ...form, accountName: e.target.value })}
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
              onChange={(e) =>
                setForm({ ...form, accountNumber: e.target.value })
              }
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
              value={form.paymentNote ?? ""}
              onChange={(e) =>
                setForm({ ...form, paymentNote: e.target.value })
              }
              placeholder="e.g. Please use your full name as the transfer reference."
            />
          </label>

          {error && (
            <p className="flex items-center gap-2 text-xs text-red-400">
              <AlertCircle className="w-3.5 h-3.5" />
              {error}
            </p>
          )}
          {success && (
            <p className="flex items-center gap-2 text-xs text-emerald-400">
              <Check className="w-3.5 h-3.5" />
              Payment details saved.
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 border border-gold/40 text-gold text-[10px] uppercase tracking-[0.22em] hover:bg-gold/10 disabled:opacity-50 transition-colors"
          >
            {loading ? "Saving…" : "Save Payment Details"}
          </button>
        </form>
      )}
    </div>
  );
}
