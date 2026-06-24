import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminShell from "./components/AdminShell";
import DashboardStats from "./components/DashboardStats";
import Link from "next/link";

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    PENDING: "text-amber-400  border-amber-400/30  bg-amber-400/[0.08]",
    REVIEWING: "text-blue-400   border-blue-400/30   bg-blue-400/[0.08]",
    APPROVED: "text-emerald-400 border-emerald-400/30 bg-emerald-400/[0.08]",
    REJECTED: "text-red-400    border-red-400/30    bg-red-400/[0.08]",
  };
  return (
    <span
      className={`text-xs uppercase tracking-[0.15em] border px-2 py-0.5 shrink-0 ${map[status] ?? ""}`}
    >
      {status}
    </span>
  );
}

export default async function AdminDashboard() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const [total, pending, reviewing, approved, rejected, waitlist, recent] =
    await Promise.all([
      prisma.application.count(),
      prisma.application.count({ where: { status: "PENDING" } }),
      prisma.application.count({ where: { status: "REVIEWING" } }),
      prisma.application.count({ where: { status: "APPROVED" } }),
      prisma.application.count({ where: { status: "REJECTED" } }),
      prisma.waitlistEntry.count(),
      prisma.application.findMany({
        orderBy: { createdAt: "desc" },
        take: 8,
        select: {
          id: true,
          name: true,
          email: true,
          country: true,
          whatYouDo: true,
          status: true,
          createdAt: true,
        },
      }),
    ]);

  return (
    <AdminShell adminName={session.name}>
      <div className="space-y-8">
        {/* Page header */}
        <div className="anim-fade-up space-y-1">
          <h1
            className="font-serif font-light text-[#E8E2D9]"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
          >
            Dashboard
          </h1>
          <p className="text-xs text-[#3A3530] tracking-wide">
            Welcome back, {session.name}
          </p>
        </div>

        {/* Stats grid */}
        <div className="anim-fade-up-d1">
          <DashboardStats
            stats={{ total, pending, reviewing, approved, rejected, waitlist }}
          />
        </div>

        {/* Recent applications */}
        <div className="anim-fade-up-d2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-[0.18em] text-[#4A4438] font-medium">
              Recent Applications
            </h2>
            <Link
              href="/admin/applications"
              className="text-xs uppercase tracking-widest text-gold hover:text-[#E8E2D9] transition-colors duration-200"
            >
              View all →
            </Link>
          </div>

          <div className="border border-white/6">
            {/* Desktop */}
            <div className="hidden sm:block divide-y divide-white/4">
              {recent.length === 0 ? (
                <p className="py-16 text-center text-[#2A2420] text-sm">
                  No applications yet.
                </p>
              ) : (
                recent.map((app: any, idx: any) => (
                  <Link
                    key={app.id}
                    href={`/admin/applications?id=${app.id}`}
                    className="flex items-center gap-4 px-5 py-3.5 hover:bg-white/2 transition-colors group anim-fade-up"
                    style={{ animationDelay: `${0.3 + idx * 0.04}s` }}
                  >
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
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#C8C0B4] group-hover:text-[#E8E2D9] transition-colors font-medium truncate leading-tight">
                        {app.name}
                      </p>
                      <p className="text-xs text-[#3A3530] truncate">
                        {app.email} · {app.country}
                      </p>
                    </div>
                    <StatusBadge status={app.status} />
                    <span className="text-xs text-[#2A2420] shrink-0 hidden lg:block tabular-nums">
                      {new Date(app.createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </Link>
                ))
              )}
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden divide-y divide-white/4">
              {recent.length === 0 ? (
                <p className="py-12 text-center text-[#2A2420] text-sm">
                  No applications yet.
                </p>
              ) : (
                recent.map((app: any) => (
                  <Link
                    key={app.id}
                    href={`/admin/applications?id=${app.id}`}
                    className="flex items-center justify-between gap-3 px-4 py-3.5 hover:bg-white/2 transition-colors"
                  >
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
                          {app.country}
                        </p>
                      </div>
                    </div>
                    <StatusBadge status={app.status} />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
