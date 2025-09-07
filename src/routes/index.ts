import App from "@/App";
import BookDetails from "@/pages/Book/BookDetails";
import Books from "@/pages/Book/Books";
import Course from "@/pages/Course/Course";
import CourseDetails from "@/pages/Course/CourseDetails";
import HomePage from "@/pages/HomePage";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router";




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
            }
        ]
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