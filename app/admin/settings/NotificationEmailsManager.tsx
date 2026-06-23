"use client";

import React, { useState, useEffect } from "react";
import { Mail, Plus, Trash2, Check, AlertCircle } from "lucide-react";

interface NotificationEmail {
  id: string;
  email: string;
  name: string | null;
  createdAt: string;
}

export default function NotificationEmailsManager() {
  const [emails, setEmails] = useState<NotificationEmail[]>([]);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const inputClass =
    "w-full bg-transparent border-b border-white/8 py-3 text-xs text-[#E8E2D9] placeholder-[#2A2420] focus:outline-none focus:border-gold/50 transition-colors duration-300";

  useEffect(() => {
    fetchEmails();
  }, []);

  async function fetchEmails() {
    try {
      const res = await fetch("/api/admin/notifications");
      if (res.ok) {
        const data = await res.json();
        setEmails(data.emails || []);
      }
    } catch (err) {
      console.error("Failed to fetch notification emails:", err);
    } finally {
      setFetching(false);
    }
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!newEmail.trim()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/admin/notifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newEmail, name: newName }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to add email address.");
        return;
      }

      setSuccess(true);
      setNewEmail("");
      setNewName("");
      fetchEmails();
    } catch {
      setError("A network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    setError("");
    setSuccess(false);
    setDeletingId(id);

    try {
      const res = await fetch(`/api/admin/notifications?id=${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to delete email address.");
        return;
      }

      setEmails(emails.filter((e) => e.id !== id));
    } catch {
      setError("A network error occurred. Please try again.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="max-w-[480px] bg-charcoal border border-white/5 p-6 md:p-8 space-y-6 shadow-xl">
      <div className="space-y-1">
        <h2 className="font-serif font-light text-[#E8E2D9] text-lg">
          Notification Recipients
        </h2>
        <p className="text-xs text-[#5A5449] leading-relaxed">
          Manage extra email addresses (e.g. developers, business owners) that
          will receive notifications when a new application is registered.
        </p>
      </div>

      {/* Add Recipient Form */}
      <form onSubmit={handleAdd} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.25em] text-[#5A5449] font-medium block">
            Email Address
          </label>
          <input
            type="email"
            required
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="e.g. owner@maisonvereen.com"
            className={inputClass}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] uppercase tracking-[0.25em] text-[#5A5449] font-medium block">
            Recipient Name (Optional)
          </label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="e.g. Founder"
            className={inputClass}
          />
        </div>

        {error && (
          <div className="border border-red-900/40 bg-red-950/20 px-4 py-3 text-xs text-red-400 flex items-start gap-2.5 leading-relaxed">
            <AlertCircle className="w-[14px] h-[14px] shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="border border-gold/30 bg-gold/5 px-4 py-3 text-xs text-gold flex items-start gap-2.5 leading-relaxed">
            <Check className="w-[14px] h-[14px] shrink-0 mt-0.5" />
            <span>Recipient added successfully.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={loading || !newEmail}
          className="w-full py-3 border border-gold/40 hover:border-gold hover:bg-gold/8 text-[#E8E2D9] transition-all duration-400 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          style={{ fontSize: "11px", letterSpacing: "0.2em" }}
        >
          {loading ? (
            <span className="spinner spinner-sm" />
          ) : (
            <Plus className="w-3.5 h-3.5" />
          )}
          <span className="uppercase font-medium">Add Recipient</span>
        </button>
      </form>

      {/* Recipient List */}
      <div className="space-y-3 pt-4 border-t border-white/5">
        <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#4A4438] font-medium">
          Active Recipients
        </h3>

        {fetching ? (
          <div className="py-6 flex items-center justify-center">
            <span className="spinner spinner-sm" />
          </div>
        ) : emails.length === 0 ? (
          <p className="text-xs text-[#3A3530] italic py-2">
            No extra recipients configured. (Only database admins will receive
            notifications).
          </p>
        ) : (
          <div className="divide-y divide-white/4 max-h-[220px] overflow-y-auto pr-1">
            {emails.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-3 gap-4 group"
              >
                <div className="min-w-0">
                  <p className="text-xs text-[#C8C0B4] font-medium truncate">
                    {item.email}
                  </p>
                  {item.name && (
                    <p className="text-[10px] text-[#5A5449] truncate mt-0.5">
                      {item.name}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => handleDelete(item.id)}
                  disabled={deletingId !== null}
                  className="text-[#3A3530] hover:text-red-400 p-1.5 transition-colors disabled:opacity-30 cursor-pointer"
                  aria-label={`Delete ${item.email}`}
                >
                  {deletingId === item.id ? (
                    <span className="spinner spinner-sm" />
                  ) : (
                    <Trash2 className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
