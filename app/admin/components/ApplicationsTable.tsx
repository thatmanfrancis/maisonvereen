"use client";

import React, { useState, useTransition } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import ApplicationDrawer from "./ApplicationDrawer";

interface Application {
  id: string;
  name: string;
  email: string;
  country: string;
  occupation: string;
  drives: string;
  legacy: string;
  howHeard: string;
  consent: boolean;
  status: string;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
}
interface Pagination {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export const STATUS_META: Record<string, { label: string; cls: string }> = {
  PENDING: {
    label: "Pending",
    cls: "text-amber-400  border-amber-400/30  bg-amber-400/[0.08]",
  },
  REVIEWING: {
    label: "Reviewing",
    cls: "text-blue-400   border-blue-400/30   bg-blue-400/[0.08]",
  },
  APPROVED: {
    label: "Approved",
    cls: "text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.08]",
  },
  REJECTED: {
    label: "Rejected",
    cls: "text-red-400    border-red-400/30    bg-red-400/[0.08]",
  },
};

const STATUSES = ["", "PENDING", "REVIEWING", "APPROVED", "REJECTED"];

function StatusBadge({ status }: { status: string }) {
  const m = STATUS_META[status] ?? { label: status, cls: "" };
  return (
    <span
      className={`inline-flex text-xs uppercase tracking-[0.15em] border px-2 py-0.5 leading-5 ${m.cls}`}
    >
      {m.label}
    </span>
  );
}

export default function ApplicationsTable({
  applications,
  pagination,
  currentSearch,
  currentStatus,
  selectedApplication,
}: {
  applications: Application[];
  pagination: Pagination;
  currentSearch: string;
  currentStatus: string;
  selectedApplication: Application | null;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [pending, startTransition] = useTransition();
  const [search, setSearch] = useState(currentSearch);
  const [drawer, setDrawer] = useState<Application | null>(selectedApplication);

  function updateParams(updates: Record<string, string>) {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([k, v]) =>
      v ? params.set(k, v) : params.delete(k),
    );
    startTransition(() => router.push(`${pathname}?${params.toString()}`));
  }

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    updateParams({ search, page: "1" });
  }

  function openDrawer(app: Application) {
    setDrawer(app);
    updateParams({ id: app.id });
  }

  function closeDrawer() {
    setDrawer(null);
    updateParams({ id: "" });
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/applications/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (drawer?.id === id) setDrawer((d) => (d ? { ...d, status } : d));
    router.refresh();
  }

  return (
    <>
      {/* ── Filters ── */}
      <div className="flex flex-col sm:flex-row gap-2.5">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 flex min-w-0">
          <div className="relative flex-1 min-w-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#3A3530] pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, country…"
              className="w-full bg-[#0D0D0D] border border-white/[0.07] pl-9 pr-8 py-2.5 text-xs text-[#E8E2D9] placeholder-[#2A2420] focus:outline-none focus:border-gold/40 transition-colors duration-200"
            />
            {search && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  updateParams({ search: "", page: "1" });
                }}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#3A3530] hover:text-[#E8E2D9] transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="border border-l-0 border-white/[0.07] bg-[#0D0D0D] px-4 text-xs uppercase tracking-widest text-[#4A4438] hover:text-gold transition-colors duration-200 shrink-0"
          >
            Go
          </button>
        </form>

        {/* Status filter */}
        <div className="relative shrink-0">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#3A3530] pointer-events-none" />
          <select
            value={currentStatus}
            onChange={(e) =>
              updateParams({ status: e.target.value, page: "1" })
            }
            className="bg-[#0D0D0D] border border-white/[0.07] pl-8 pr-4 py-2.5 text-xs text-[#8A8178] focus:outline-none focus:border-gold/40 transition-colors cursor-pointer appearance-none sm:w-[160px]"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s} className="bg-[#0D0D0D]">
                {s || "All statuses"}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ── Loading skeleton ── */}
      {pending && (
        <div className="space-y-2 anim-fade-in">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-14 skeleton rounded-none"
              style={{ animationDelay: `${i * 0.06}s` }}
            />
          ))}
        </div>
      )}

      {/* ── Table (hidden while loading) ── */}
      {!pending && (
        <div className="border border-white/6 overflow-hidden anim-fade-in">
          {/* Desktop table */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5 bg-[#0C0C0C]">
                  {[
                    "Applicant",
                    "Country",
                    "Occupation",
                    "Status",
                    "Applied",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#3A3530] font-medium"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/4">
                {applications.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-20 text-center text-[#2A2420] text-sm"
                    >
                      No applications found.
                    </td>
                  </tr>
                ) : (
                  applications.map((app, idx) => (
                    <tr
                      key={app.id}
                      onClick={() => openDrawer(app)}
                      className="admin-row cursor-pointer hover:bg-white/2 anim-fade-up"
                      style={{ animationDelay: `${idx * 0.03}s` }}
                    >
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center"
                            style={{
                              background: "rgba(201,168,76,0.08)",
                              border: "1px solid rgba(201,168,76,0.15)",
                            }}
                          >
                            <span
                              className="font-semibold"
                              style={{ fontSize: "16px", color: "#C9A84C" }}
                            >
                              {app.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm text-[#C8C0B4] font-medium truncate leading-tight">
                              {app.name}
                            </p>
                            <p className="text-xs text-[#3A3530] truncate">
                              {app.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-xs text-[#5A5449]">
                        {app.country}
                      </td>
                      <td className="px-5 py-3.5 text-xs text-[#5A5449] max-w-[160px] truncate">
                        {app.occupation}
                      </td>
                      <td className="px-5 py-3.5">
                        <StatusBadge status={app.status} />
                      </td>
                      <td className="px-5 py-3.5 text-xs text-[#3A3530] whitespace-nowrap">
                        {new Date(app.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile card list */}
          <div className="sm:hidden divide-y divide-white/5">
            {applications.length === 0 ? (
              <p className="py-16 text-center text-[#2A2420] text-sm">
                No applications found.
              </p>
            ) : (
              applications.map((app, idx) => (
                <button
                  key={app.id}
                  onClick={() => openDrawer(app)}
                  className="w-full text-left px-4 py-4 hover:bg-white/2 transition-colors anim-fade-up"
                  style={{ animationDelay: `${idx * 0.04}s` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center"
                        style={{
                          background: "rgba(201,168,76,0.08)",
                          border: "1px solid rgba(201,168,76,0.15)",
                        }}
                      >
                        <span
                          className="font-semibold"
                          style={{ fontSize: "16px", color: "#C9A84C" }}
                        >
                          {app.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-[#C8C0B4] font-medium truncate">
                          {app.name}
                        </p>
                        <p className="text-xs text-[#3A3530] truncate">
                          {app.email}
                        </p>
                        <p className="text-xs text-[#2A2420] mt-0.5">
                          {app.country} · {app.occupation}
                        </p>
                      </div>
                    </div>
                    <StatusBadge status={app.status} />
                  </div>
                </button>
              ))
            )}
          </div>

          {/* Pagination */}
          {pagination.pages > 1 && (
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-t border-white/5 bg-[#0C0C0C]">
              <span className="text-xs text-[#3A3530]">
                {(pagination.page - 1) * pagination.limit + 1}–
                {Math.min(pagination.page * pagination.limit, pagination.total)}{" "}
                of {pagination.total}
              </span>
              <div className="flex items-center gap-1">
                <button
                  disabled={pagination.page <= 1}
                  onClick={() =>
                    updateParams({ page: String(pagination.page - 1) })
                  }
                  className="p-1.5 text-[#4A4438] hover:text-gold disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-2 text-xs text-[#5A5449] tabular-nums">
                  {pagination.page}/{pagination.pages}
                </span>
                <button
                  disabled={pagination.page >= pagination.pages}
                  onClick={() =>
                    updateParams({ page: String(pagination.page + 1) })
                  }
                  className="p-1.5 text-[#4A4438] hover:text-gold disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Drawer */}
      {drawer && (
        <ApplicationDrawer
          application={drawer}
          onClose={closeDrawer}
          onStatusChange={updateStatus}
        />
      )}
    </>
  );
}
