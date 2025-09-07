import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import type { TRole } from "@/type/type";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSidebarItems];
    default:
      return [];
  }
};