"use client";

import React from "react";
import { Users, Clock, Eye, CheckCircle, XCircle, Mail } from "lucide-react";

interface Stats {
  total: number;
  pending: number;
  reviewing: number;
  approved: number;
  rejected: number;
  waitlist: number;
}

const CARDS = (s: Stats) => [
  {
    label: "Total",
    sub: "Applications",
    value: s.total,
    icon: Users,
    accent: "#C9A84C",
    bg: "rgba(201,168,76,0.08)",
  },
  {
    label: "Pending",
    sub: "Awaiting review",
    value: s.pending,
    icon: Clock,
    accent: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    pulse: true,
  },
  {
    label: "Reviewing",
    sub: "Under consideration",
    value: s.reviewing,
    icon: Eye,
    accent: "#60A5FA",
    bg: "rgba(96,165,250,0.08)",
  },
  {
    label: "Approved",
    sub: "Access granted",
    value: s.approved,
    icon: CheckCircle,
    accent: "#34D399",
    bg: "rgba(52,211,153,0.08)",
  },
  {
    label: "Rejected",
    sub: "Not accepted",
    value: s.rejected,
    icon: XCircle,
    accent: "#F87171",
    bg: "rgba(248,113,113,0.08)",
  },
  {
    label: "Waitlist",
    sub: "Email sign-ups",
    value: s.waitlist,
    icon: Mail,
    accent: "#C084FC",
    bg: "rgba(192,132,252,0.08)",
  },
];

export default function DashboardStats({ stats }: { stats: Stats }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
      {CARDS(stats).map(
        ({ label, sub, value, icon: Icon, accent, bg, pulse }) => (
          <div
            key={label}
            className={`stat-card border border-white/6 bg-[#0D0D0D] p-4 space-y-3.5 hover:bg-white/15 transition-colors duration-300 ${pulse && value > 0 ? "badge-pending" : ""}`}
          >
            {/* Icon */}
            <div
              className="w-8 h-8 flex items-center justify-center rounded-sm"
              style={{ background: bg }}
            >
              <Icon className="w-[15px] h-[15px]" style={{ color: accent }} />
            </div>

            {/* Value */}
            <div>
              <p
                className="font-serif font-light leading-none"
                style={{ fontSize: "28px", color: "#E8E2D9" }}
              >
                {value}
              </p>
              <p
                className="font-medium mt-1.5 leading-tight"
                style={{
                  fontSize: "16px",
                  letterSpacing: "0.1em",
                  color: "#4A4438",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </p>
              <p className="text-xs text-[#2A2420] mt-0.5 leading-tight">
                {sub}
              </p>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
