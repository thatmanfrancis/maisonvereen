import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import AdminShell from "../components/AdminShell";
import ChangePasswordForm from "./ChangePasswordForm";
import NotificationEmailsManager from "./NotificationEmailsManager";

export default async function SettingsPage() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  return (
    <AdminShell adminName={session.name}>
      <div className="space-y-6 max-w-[1200px]">
        {/* Page Header */}
        <div className="space-y-1">
          <span className="section-tag block">Settings</span>
          <h1 className="font-serif font-light text-[#E8E2D9] text-2xl md:text-3xl">
            Security & Preferences
          </h1>
          <p className="text-[#5A5449] text-xs">
            Manage your administration portal access credentials and notification recipients.
          </p>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-2">
          <ChangePasswordForm />
          <NotificationEmailsManager />
        </div>
      </div>
    </AdminShell>
  );
}
