import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { role } from "@/constants/role";
import BookDetails from "@/pages/Book/BookDetails";
import Books from "@/pages/Book/Books";
import Course from "@/pages/Course/Course";
import CourseDetails from "@/pages/Course/CourseDetails";
import Dashboard from "@/pages/Dashboard/Dashboard";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login/Login";
import Profile from "@/pages/Profile/Profile";
import Register from "@/pages/Register/Register";
import type { TRole } from "@/type/type";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import Cart from "@/pages/Cart/Cart";




export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: HomePage,
                path: "/"
            },
            {
                Component: Course,
                path: "/courses"
            },
            {
                Component: CourseDetails,
                path: "/courses/:id"
            },
            {
                Component: Books,
                path: "/books"
            },
                        {
                Component: BookDetails,
                path: "/books/:id"
            },
            {
                Component: Dashboard,
                path: "/dashboard"
            },
            {
                Component: Profile,
                path: "/profile"
            },
            {
                Component: Cart,
                path: "/cart"
            }
        ]
    },
    {
        Component: withAuth(DashboardLayout, role.admin as TRole),
        path: "/admin",
        children: [...generateRoutes(adminSidebarItems)]
    },
    {
        Component: Login,
        path: "/login"
    },
    {
        Component: Register,
        path: "/register"
    },
])