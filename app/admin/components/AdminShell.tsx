"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  ListChecks,
  LogOut,
  Menu,
  X,
  ExternalLink,
  Key,
} from "lucide-react";

const NAV = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/applications", icon: Users, label: "Applications" },
  { href: "/admin/waitlist", icon: ListChecks, label: "Waitlist" },
  { href: "/admin/settings", icon: Key, label: "Security" },
];

export default function AdminShell({
  children,
  adminName,
}: {
  children: React.ReactNode;
  adminName: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [logging, setLogging] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  async function handleLogout() {
    setLogging(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  /* ── Sidebar content (shared between desktop + mobile) ── */
  const SidebarInner = (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-6 pt-7 pb-6 border-b border-white/5">
        <Link href="/admin" className="block w-fit group">
          <div className="leading-[1.3]">
            <span
              className="block font-serif tracking-[0.45em] text-[#E8E2D9] uppercase group-hover:text-gold transition-colors duration-500"
              style={{ fontSize: "16px" }}
            >
              Maison
            </span>
            <span
              className="block font-serif tracking-[0.45em] text-[#E8E2D9] uppercase group-hover:text-gold transition-colors duration-500"
              style={{ fontSize: "16px" }}
            >
              Vereen
            </span>
          </div>
          <span className="block text-xs uppercase tracking-[0.25em] text-[#2A2420] mt-1.5">
            Admin Portal
          </span>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {NAV.map(({ href, icon: Icon, label }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-sm
                transition-all duration-200 group relative overflow-hidden
                ${
                  active
                    ? "bg-gold/8 text-gold"
                    : "text-[#5A5449] hover:text-[#C8C0B4] hover:bg-white/3"
                }
              `}
            >
              {/* Active left bar */}
              {active && (
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold rounded-r anim-fade-in" />
              )}
              <Icon className="w-[15px] h-[15px] shrink-0" />
              <span
                className="font-medium"
                style={{ fontSize: "16px", letterSpacing: "0.07em" }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 pb-5 pt-4 border-t border-white/5 space-y-2">
        {/* Admin info */}
        <div className="px-3 py-2 space-y-0.5 mb-1">
          <p className="text-xs uppercase tracking-[0.22em] text-[#2A2420]">
            Signed in
          </p>
          <p className="text-xs text-[#6A6258] truncate">{adminName}</p>
        </div>

        {/* View site */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2.5 px-3 py-2.5 rounded-sm text-[#3A3530] hover:text-[#5A5449] transition-colors duration-200"
        >
          <ExternalLink className="w-[14px] h-[14px]" />
          <span
            style={{ fontSize: "16px", letterSpacing: "0.07em" }}
            className="font-medium"
          >
            View site
          </span>
        </Link>

        {/* Logout */}
        <button
          onClick={() => setShowLogoutConfirm(true)}
          disabled={logging}
          className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-sm text-[#4A4438] hover:text-red-400 hover:bg-red-900/8 transition-all duration-200 disabled:opacity-50"
        >
          <LogOut className="w-[14px] h-[14px] shrink-0" />
          <span
            style={{ fontSize: "16px", letterSpacing: "0.07em" }}
            className="font-medium"
          >
            Sign out
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-charcoal">
      {/* ── Desktop sidebar ── */}
      <aside className="hidden md:flex flex-col w-[220px] lg:w-[240px] shrink-0 bg-charcoal border-r border-white/5">
        {SidebarInner}
      </aside>

      {/* ── Mobile sidebar overlay ── */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          {/* Backdrop */}
          <button
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          {/* Drawer */}
          <aside className="relative w-[240px] shrink-0 bg-charcoal border-r border-white/6 flex flex-col admin-drawer">
            {SidebarInner}
          </aside>
        </div>
      )}

      {/* ── Main ── */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        {/* Mobile topbar */}
        <div className="md:hidden flex items-center justify-between px-4 py-3.5 border-b border-white/5 bg-charcoal shrink-0">
          <button
            onClick={() => setOpen(true)}
            className="text-[#5A5449] hover:text-[#E8E2D9] transition-colors p-1 -ml-1"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="leading-[1.2] text-center">
            <span
              className="block font-serif tracking-[0.4em] text-[#E8E2D9] uppercase"
              style={{ fontSize: "16px" }}
            >
              Maison Vereen
            </span>
          </div>
          <div className="w-7" /> {/* spacer */}
        </div>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto">
          <div className="px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 max-w-[1280px] w-full mx-auto">
            {children}
          </div>
        </main>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-70 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="w-full max-w-[400px] bg-charcoal border border-white/8 p-6 space-y-6 shadow-2xl anim-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              <span className="section-tag block">Sign Out</span>
              <h3 className="font-serif font-light text-[#E8E2D9] text-xl">
                Leave the House?
              </h3>
              <p className="text-xs text-[#7A7068] leading-relaxed">
                Are you sure you want to end your session and sign out of the Maison Vereen admin portal?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <button
                type="button"
                onClick={() => setShowLogoutConfirm(false)}
                className="py-3 border border-white/8 hover:border-white/20 text-[#5A5449] hover:text-[#E8E2D9] transition-all duration-300 font-medium text-xs uppercase tracking-widest"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={async () => {
                  setShowLogoutConfirm(false);
                  await handleLogout();
                }}
                disabled={logging}
                className="py-3 border border-red-900/50 hover:border-red-600 bg-red-950/10 hover:bg-red-950/20 text-red-400 hover:text-red-300 transition-all duration-300 font-medium text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                {logging && <span className="spinner spinner-sm" />}
                <span>{logging ? "Signing out…" : "Sign Out"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
