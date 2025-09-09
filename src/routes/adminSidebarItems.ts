import AdminCourses from "@/pages/Admin/AdminCourses";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import type { ISidebarItem } from "@/type/type";


export const adminSidebarItems : ISidebarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Overview",
        url: "/admin",
        component: AdminDashboard
      },
      {
        title: "Course",
        url: "/admin/course",
        component: AdminCourses
      },
    ],
  }
]