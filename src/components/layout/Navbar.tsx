
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ModeToggle } from "./ModeToggler"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router"
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/auth.api"
import { useDispatch } from "react-redux"
import ProfileSidebar from "./ProfileSideBar"
import Notifications from "../Notifications"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/books", label: "Books" },
  { href: "/exams", label: "Exams" },
  { href: "/forum", label: "Forum" },
  { href: "/resources", label: "Resources" },
  { href: "/blogs", label: "Blogs" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch()
  const [logout] = useLogoutMutation()
  const {data} = useUserInfoQuery(undefined)
  const userInfo = data?.data?.user;
  const email = userInfo?.email
  const userName = userInfo?.name
  // console.log()

  // logout 
  const handleLogout = async () => {
    await logout(undefined)
    dispatch(authApi.util.resetApiState())
    setIsSidebarOpen(false)
  }

  // navbar scrolling 
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
  <>
    <header className={` w-full sticky top-0 z-50 transition-all duration-300 mx-auto  border-b bg-white dark:bg-gray-900  ${
      isScrolled
      ? "h-20 shadow-md backdrop-blur-md"
      : "h-20 backdrop-blur-sm"
    }`}>
      <div className="max-w-[1256px] mx-auto flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-centerr w-full justify-between gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden border ml-2"
                variant="ghost"
                size="icon"
                >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="border w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink asChild
                        className="py-1.5"
                        >
                        <NavLink
                          to={link.href}
                          className={({ isActive }) =>
                            `py-1.5 font-medium transition-colors !text-black ${
                              isActive
                              ? "text-sky-600 border-b-2 border-sky-500"
                              : "text-muted-foreground hover:text-primary"
                            }`
                          }
                          >
                          {link.label}
                        </NavLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          <div className="text-primary hover:text-primary/90">
          <p className="text-3xl font-bold text-sky-500">EduTech</p>
          </div>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-6">
                {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `py-1.5 transition-colors text-[14px] font-medium !text-black dark:!text-white ${
                        isActive
                          ? "text-sky-600 border-b-2 border-sky-500"
                          : "text-muted-foreground hover:text-primary"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex w-[25%] items-end justify-end gap-2">
          {/* profile */}
          {email ? (
            <div className="flex gap-2 justify-end">
            <Notifications/>
            <div onClick={() => setIsSidebarOpen(true)} className="flex items-center gap-2 border py-1 px-2 rounded-md bg-slate-200">
              {/* Circle Avatar with First Letter */}
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-bold">
                M
              </div>
              {/* Name */}
              <div className="font-semibold text-gray-700">
                {userName}
              </div>
            </div>
          </div>

          ) : (
            <div className="flex gap-4">
            <Button
            asChild
            className="text-sm font-semibold bg-primary hover:bg-primary/90 px-5"
            >
              <Link to="/login">Login</Link>
            </Button>
            <ModeToggle/>
            </div>
          )}
          
        </div>
      </div>
    </header>

      <ProfileSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onLogout={handleLogout}
      />
</>
  )
}
