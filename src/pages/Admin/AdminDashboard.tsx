import DashboardGraph from "./DashboardGraph";
import DashboardStats from "./DashboardStats";

export default function AdminDashboard() {
  return (
    <div className="bg-slate-100 dark:bg-black p-6 flex flex-col gap-6">
      <DashboardStats/>
      <DashboardGraph/>
    </div>
  )
}
