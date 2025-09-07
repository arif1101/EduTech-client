import type { ISidebarItem } from "@/type/type";



export const generateRoutes = (sidebarItems: ISidebarItem[]) => {
  // console.log("from generateRoutes : ",sidebarItems)
  return sidebarItems.flatMap((section) =>
    section.items.map((route) => ({
      path: route.url,
      Component: route.component,
    }))
  );
};