import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminShell from "../components/AdminShell";
import ApplicationsTable from "../components/ApplicationsTable";

type ApplicationStatus = "PENDING" | "REVIEWING" | "APPROVED" | "REJECTED";

interface SearchParams {
  page?: string;
  status?: string;
  search?: string;
  id?: string;
}

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const sp = await searchParams;
  const page   = Math.max(1, Number(sp.page ?? 1));
  const limit  = 20;
  const status = sp.status as ApplicationStatus | undefined;
  const search = sp.search?.trim() ?? "";
  const skip   = (page - 1) * limit;

  const where = {
    ...(status ? { status } : {}),
    ...(search ? {
      OR: [
        { name:       { contains: search, mode: "insensitive" as const } },
        { email:      { contains: search, mode: "insensitive" as const } },
        { country:    { contains: search, mode: "insensitive" as const } },
        { whatYouDo:  { contains: search, mode: "insensitive" as const } },
      ],
    } : {}),
  };

  const [applications, total] = await Promise.all([
    prisma.application.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.application.count({ where }),
  ]);

  // If a specific application ID is in the query, fetch full detail
  const selected = sp.id
    ? await prisma.application.findUnique({ where: { id: sp.id } })
    : null;

  return (
    <AdminShell adminName={session.name}>
      <div className="space-y-6 max-w-[1200px]">
        <div>
          <h1 className="font-serif font-light text-[#E8E2D9] text-2xl md:text-3xl">
            Applications
          </h1>
          <p className="text-[#5A5449] text-xs mt-1">
            {total} total application{total !== 1 ? "s" : ""}
          </p>
        </div>

        <ApplicationsTable
          applications={JSON.parse(JSON.stringify(applications))}
          pagination={{ total, page, limit, pages: Math.ceil(total / limit) }}
          currentSearch={search}
          currentStatus={status ?? ""}
          selectedApplication={selected ? JSON.parse(JSON.stringify(selected)) : null}
        />
      </div>
    </AdminShell>
  );
}
