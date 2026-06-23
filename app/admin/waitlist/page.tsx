import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminShell from "../components/AdminShell";

export default async function WaitlistPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const entries = await prisma.waitlistEntry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <AdminShell adminName={session.name}>
      <div className="space-y-6 max-w-[900px]">
        <div>
          <h1 className="font-serif font-light text-[#E8E2D9] text-2xl md:text-3xl">
            Waitlist
          </h1>
          <p className="text-[#5A5449] text-xs mt-1">
            {entries.length} entr{entries.length !== 1 ? "ies" : "y"}
          </p>
        </div>

        <div className="border border-white/6 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/6 bg-[#0D0D0D]">
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#4A4438] font-medium">
                  #
                </th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#4A4438] font-medium">
                  Email Address
                </th>
                <th className="text-left px-5 py-3 text-xs uppercase tracking-[0.18em] text-[#4A4438] font-medium">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/4">
              {entries.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="px-5 py-16 text-center text-[#3A3530] text-sm"
                  >
                    No waitlist entries yet.
                  </td>
                </tr>
              ) : (
                entries.map((entry: any, idx: any) => (
                  <tr
                    key={entry.id}
                    className="hover:bg-white/2 transition-colors"
                  >
                    <td className="px-5 py-3.5 text-xs text-[#3A3530] font-mono">
                      {String(idx + 1).padStart(3, "0")}
                    </td>
                    <td className="px-5 py-3.5 text-sm text-[#8A8178]">
                      {entry.email}
                    </td>
                    <td className="px-5 py-3.5 text-xs text-[#3A3530]">
                      {new Date(entry.createdAt).toLocaleDateString("en-GB", {
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

        {entries.length > 0 && (
          <div className="flex justify-end">
            <a
              href="/api/waitlist/export"
              className="text-xs uppercase tracking-widest text-gold hover:text-[#E8E2D9] transition-colors"
            >
              Export CSV →
            </a>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
