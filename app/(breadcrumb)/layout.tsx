// import { Sidebar } from "@/components/sidebar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1">
      <div className="hidden md:block w-[300px] border-r">
        <Sidebar />
      </div>
      <main className="flex-1 p-6 overflow-auto">
        {children}
      </main>
    </div>
  );
}