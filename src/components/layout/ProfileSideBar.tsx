import { NavLink } from "react-router"
import { Button } from "@/components/ui/button"
import { useUserInfoQuery } from "@/redux/features/auth/auth.api"
import {
  LayoutDashboard,
  ShoppingCart,
  User,
  BookOpen,
  Book,
  FileText,
  AlertCircle,
  Calendar,
  ListOrdered,
  Settings,
  LogOut,
} from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onLogout: () => void
  user?: {
    name: string
    email: string
  }
}

export default function ProfileSidebar({
  isOpen,
  onClose,
  onLogout,
}: SidebarProps) {
  const { data } = useUserInfoQuery(undefined)
  const user = data?.data?.user

  const navigation = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Cart", href: "/cart", icon: ShoppingCart },
    { label: "My Profile", href: "/profile", icon: User },
    { label: "Enrolled Courses", href: "/courses/enrolled", icon: BookOpen },
    { label: "Purchased Books", href: "/books/purchased", icon: Book },
    { label: "Saved Resources", href: "/resources/saved", icon: FileText },
    { label: "Participated Exams", href: "/exams", icon: AlertCircle },
    { label: "Calendar", href: "/calendar", icon: Calendar },
    { label: "Order History", href: "/orders", icon: ListOrdered },
    { label: "Admin Panel", href: "/admin", icon: Settings },
  ]

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 bg-opacity-40 z-40"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        {/* Sidebar content */}
        <div className="p-4 space-y-4">
          {user && (
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white font-bold">
                {user.name?.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-gray-200 text-gray-900 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Logout button */}
          <Button
            onClick={() => {
              onLogout()
              onClose()
            }}
            variant="outline"
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center gap-2 justify-start"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </Button>
        </div>
      </div>
    </>
  )
}
