"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, XCircle, Eye, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { STATUS_META } from "./ApplicationsTable";

interface Application {
  id: string;
  name: string;
  email: string;
  country: string;
  occupation: string;
  drives: string;
  legacy: string;
  howHeard: string;
  status: string;
  notes: string | null;
  createdAt: string;
}

const STATUS_ACTIONS = [
  { value: "PENDING", label: "Pending", icon: Clock, color: "#F59E0B" },
  { value: "REVIEWING", label: "Reviewing", icon: Eye, color: "#60A5FA" },
  { value: "APPROVED", label: "Approve", icon: CheckCircle, color: "#34D399" },
  { value: "REJECTED", label: "Reject", icon: XCircle, color: "#F87171" },
];

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs uppercase tracking-[0.22em] text-[#2A2420]">
        {label}
      </p>
      <p className="text-xs text-[#8A8178] leading-relaxed">{value}</p>
    </div>
  );
}

function LongField({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.22em] text-[#3A3530]">
        {label}
      </p>
      <p className="text-xs text-[#7A7068] leading-[1.75] bg-[#0D0D0D] border border-white/5 px-4 py-3.5">
        {value}
      </p>
    </div>
  );
}

export default function ApplicationDrawer({
  application,
  onClose,
  onStatusChange,
}: {
  application: Application;
  onClose: () => void;
  onStatusChange: (id: string, status: string) => void;
}) {
  const router = useRouter();
  const [notes, setNotes] = useState(application.notes ?? "");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [updating, setUpdating] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  // Animate in
  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  // Close with animation
  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 280);
  }

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  async function handleStatusChange(status: string) {
    setUpdating(status);
    await onStatusChange(application.id, status);
    setUpdating(null);
  }

  async function saveNotes() {
    setSaving(true);
    await fetch(`/api/applications/${application.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
    router.refresh();
  }

  async function handleDelete() {
    if (
      !confirm(`Permanently delete the application from ${application.name}?`)
    )
      return;
    setDeleting(true);
    await fetch(`/api/applications/${application.id}`, { method: "DELETE" });
    handleClose();
    router.refresh();
  }

  const status = STATUS_META[application.status] ?? {
    label: application.status,
    cls: "",
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px] transition-opacity duration-300"
        style={{ opacity: visible ? 1 : 0 }}
        onClick={handleClose}
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 z-50 w-full max-w-[520px] bg-charcoal border-l border-white/[0.07] flex flex-col shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: visible ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-white/6 shrink-0">
          <div className="flex items-center gap-3.5 min-w-0">
            <div
              className="w-10 h-10 rounded-full shrink-0 flex items-center justify-center"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <span
                className="font-semibold"
                style={{ fontSize: "16px", color: "#C9A84C" }}
              >
                {application.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <h2
                className="font-serif font-light text-[#E8E2D9] leading-tight truncate"
                style={{ fontSize: "18px" }}
              >
                {application.name}
              </h2>
              <p className="text-xs text-[#4A4438] truncate mt-0.5">
                {application.email}
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-[#3A3530] hover:text-[#E8E2D9] transition-colors mt-1 shrink-0 p-1 -mr-1"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          {/* Current status */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3A3530]">
              Current Status
            </p>
            <span
              className={`inline-flex text-xs uppercase tracking-[0.15em] border px-3 py-1 ${status.cls}`}
            >
              {status.label}
            </span>
          </div>

          {/* Change status */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3A3530]">
              Update Status
            </p>
            <div className="grid grid-cols-2 gap-2">
              {STATUS_ACTIONS.filter((s) => s.value !== application.status).map(
                (s) => {
                  const Icon = s.icon;
                  const isUpdating = updating === s.value;
                  return (
                    <button
                      key={s.value}
                      onClick={() => handleStatusChange(s.value)}
                      disabled={!!updating}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 border border-white/[0.07] bg-[#0D0D0D] hover:border-white/15 transition-all duration-200 disabled:opacity-50 text-left"
                    >
                      {isUpdating ? (
                        <span
                          className="spinner spinner-sm"
                          style={{ borderTopColor: s.color }}
                        />
                      ) : (
                        <Icon
                          className="w-3.5 h-3.5 shrink-0"
                          style={{ color: s.color }}
                        />
                      )}
                      <span
                        className="font-medium uppercase tracking-widest"
                        style={{ fontSize: "16px", color: s.color }}
                      >
                        {s.label}
                      </span>
                    </button>
                  );
                },
              )}
            </div>
          </div>

          {/* Details grid */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3A3530]">
              Details
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <Field label="Country" value={application.country} />
              <Field label="Occupation" value={application.occupation} />
              <Field label="How heard" value={application.howHeard} />
              <Field
                label="Applied"
                value={new Date(application.createdAt).toLocaleDateString(
                  "en-GB",
                  { day: "2-digit", month: "short", year: "numeric" },
                )}
              />
            </div>
          </div>

          {/* Long text fields */}
          <LongField label="What drives you?" value={application.drives} />
          <LongField
            label="What does legacy mean to you?"
            value={application.legacy}
          />

          {/* Admin notes */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[#3A3530]">
              Internal Notes
            </p>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Private notes about this applicant…"
              className="w-full bg-[#0D0D0D] border border-white/[0.07] px-4 py-3 text-xs text-[#E8E2D9] placeholder-[#2A2420] focus:outline-none focus:border-gold/40 transition-colors duration-200 resize-none leading-[1.7]"
            />
            <button
              onClick={saveNotes}
              disabled={saving}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors duration-200 disabled:opacity-50"
              style={{ color: saved ? "#34D399" : "#C9A84C" }}
            >
              {saving && <span className="spinner spinner-sm" />}
              {saved ? "✓ Saved" : saving ? "Saving…" : "Save notes"}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/6 shrink-0 flex items-center justify-between">
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-red-500/50 hover:text-red-400 transition-colors disabled:opacity-40"
          >
            {deleting && (
              <span
                className="spinner spinner-sm"
                style={{ borderTopColor: "#f87171" }}
              />
            )}
            {deleting ? "Deleting…" : "Delete application"}
          </button>
          <button
            onClick={handleClose}
            className="text-xs uppercase tracking-[0.16em] text-[#4A4438] hover:text-[#E8E2D9] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
