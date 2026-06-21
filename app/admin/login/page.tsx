"use client";

import React, { useState, FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") ?? "/admin";

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Login failed.");
        return;
      }
      router.push(from);
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#060606] flex items-center justify-center px-4 py-12">
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed"
        style={{
          top: "30%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="w-full max-w-[400px] anim-fade-up space-y-10 relative">
        {/* Logo */}
        <div className="text-center space-y-3">
          <div className="inline-block leading-tight">
            <span
              className="block font-serif tracking-[0.5em] text-[#E8E2D9] uppercase"
              style={{ fontSize: "16px" }}
            >
              Maison
            </span>
            <span
              className="block font-serif tracking-[0.5em] text-[#E8E2D9] uppercase"
              style={{ fontSize: "16px" }}
            >
              Vereen
            </span>
          </div>
          <div className="w-6 h-px bg-gold/40 mx-auto" />
          <p className="text-xs uppercase tracking-[0.3em] text-[#3A3530]">
            Administration Portal
          </p>
        </div>

        {/* Card */}
        <div className="border border-white/[0.07] bg-[#0D0D0D] p-8 space-y-7 anim-scale-in">
          <h1
            className="font-serif font-light text-[#E8E2D9] leading-tight"
            style={{ fontSize: "22px" }}
          >
            Sign in
          </h1>

          {/* Error */}
          {error && (
            <div className="border border-red-900/50 bg-red-950/20 px-4 py-3 text-xs text-red-400 leading-relaxed anim-slide-up">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.28em] text-[#4A4438] font-medium block">
                Email
              </label>
              <input
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@maisonvereen.com"
                className="w-full bg-transparent border-b border-white/[0.08] py-3 text-xs text-[#E8E2D9] placeholder-[#2A2420] focus:outline-none focus:border-gold/50 transition-colors duration-300"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.28em] text-[#4A4438] font-medium block">
                Password
              </label>
              <input
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                placeholder="••••••••••"
                className="w-full bg-transparent border-b border-white/[0.08] py-3 text-xs text-[#E8E2D9] placeholder-[#2A2420] focus:outline-none focus:border-gold/50 transition-colors duration-300"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 border border-gold/40 hover:border-gold hover:bg-gold/[0.08] text-[#E8E2D9] transition-all duration-400 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-2"
              style={{ fontSize: "16px", letterSpacing: "0.28em" }}
            >
              {loading && <span className="spinner spinner-sm" />}
              <span className="uppercase font-medium">
                {loading ? "Signing in…" : "Sign in"}
              </span>
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#2A2420] tracking-wider">
          Restricted access · Maison Vereen
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
