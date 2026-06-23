"use client";

import React, { useState } from "react";
import { KeyRound, Check, AlertCircle } from "lucide-react";

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const inputClass =
    "w-full bg-transparent border-b border-white/8 py-3 text-xs text-[#E8E2D9] placeholder-[#2A2420] focus:outline-none focus:border-gold/50 transition-colors duration-300";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (newPassword.length < 8) {
      setError("New password must be at least 8 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to change password. Please try again.");
        return;
      }

      setSuccess(true);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setError("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-[480px] bg-charcoal border border-white/5 p-6 md:p-8 space-y-6 shadow-xl">
      <div className="space-y-1">
        <h2 className="font-serif font-light text-[#E8E2D9] text-lg">
          Update Credentials
        </h2>
        <p className="text-xs text-[#5A5449] leading-relaxed">
          Ensure your account uses a secure password to prevent unauthorized
          access to the registry.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Current Password */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.25em] text-[#5A5449] font-medium block">
            Current Password
          </label>
          <input
            type="password"
            required
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="••••••••••••"
            className={inputClass}
          />
        </div>

        {/* New Password */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.25em] text-[#5A5449] font-medium block">
            New Password
          </label>
          <input
            type="password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="••••••••••••"
            className={inputClass}
          />
        </div>

        {/* Confirm New Password */}
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.25em] text-[#5A5449] font-medium block">
            Confirm New Password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••••••"
            className={inputClass}
          />
        </div>

        {/* Feedback Messages */}
        {error && (
          <div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400 flex items-start gap-2.5 leading-relaxed">
            <AlertCircle className="w-[14px] h-[14px] shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="border border-gold/30 bg-gold/5 px-4 py-3 text-xs text-gold flex items-start gap-2.5 leading-relaxed">
            <Check className="w-[14px] h-[14px] shrink-0 mt-0.5" />
            <span>Password updated successfully.</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 border border-gold/40 hover:border-gold hover:bg-gold/8 text-[#E8E2D9] transition-all duration-400 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-2 cursor-pointer"
          style={{ fontSize: "12px", letterSpacing: "0.28em" }}
        >
          {loading && <span className="spinner spinner-sm" />}
          <KeyRound className="w-[14px] h-[14px] shrink-0" />
          <span className="uppercase font-medium">
            {loading ? "Updating..." : "Update Password"}
          </span>
        </button>
      </form>
    </div>
  );
}
