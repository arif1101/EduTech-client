import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { data: userData } = useUserInfoQuery(undefined);
  // This is sample data.
  const data = {
    navMain: getSidebarItems(userData?.data?.user?.role)
  }
  // console.log("from app-sidebar :",userData?.data?.user?.role)
  const dispatch = useDispatch()
const [logout] = useLogoutMutation()
  const handleLogout = async () => {
    await logout(undefined)
    dispatch(authApi.util.resetApiState())
  }
  return (
    <Sidebar {...props}>
      <SidebarHeader className="">
        <h1 className="text-4xl font-bold text-sky-500 mx-auto">EduTech</h1>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col items-center justify-center border-t pt-2">
          <div className="grid grid-cols-3 gap-1 my-4 md:my-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-gray-400" />
            ))}
          </div>
          <div className="flex flex-col gap-1 text-center">
            <p className="text-[16px] font-bold mb-2">Airfur</p>
            <p className="text-[13px] text-gray-500 font-bold">Admin</p>
            <p className="text-[13px] text-gray-500 font-bold">arif@gmail.com</p>
            <Button
            onClick={() => {
              handleLogout()
            }}
             className="bg-red-500 mt-2 hover:bg-red-600">logout</Button>
          </div>
        </div>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            {/* <SidebarGroupLabel>{item.title}</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="">
                      <Link className="border w-full mx-auto" to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
