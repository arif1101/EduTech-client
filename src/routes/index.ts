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
import Blogs from "@/pages/Blogs/Blogs";
import Resources from "@/pages/Resources/Resources";
import Forum from "@/pages/Forum/Forum";
import Exams from "@/pages/Exams/Exams";
import Development from "@/pages/Development";
import EnrolledCourse from "@/pages/EnrolledCourse/EnrolledCourse";
import CoursePlayer from "@/pages/EnrolledCourse/CoursePlayer";




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
            },
            {
                Component: EnrolledCourse,
                path: "/courses/enrolled"
            },
            {
                Component: CoursePlayer,
                path: "/courses/enrolled/:id"
            },
            {
                Component: Development,
                path: "/books/purchased"
            },
            {
                Component: Development,
                path: "/resources/saved"
            },
            {
                Component: Development,
                path: "/exams/perticipated"
            },
            {
                Component: Development,
                path: "/calendar"
            },
            {
                Component: Development,
                path: "/orders"
            },
            {
                Component: Exams,
                path: "/exams"
            },
            {
                Component: Forum,
                path: "/forum"
            },
            {
                Component: Resources,
                path: "/resources"
            },
            {
                Component: Blogs,
                path: "/blogs"
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