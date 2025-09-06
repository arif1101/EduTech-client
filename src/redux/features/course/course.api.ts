import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleCourse: builder.query({
      query: (id) => ({
        url: `/course/${id}`,
        method: "GET",
      }),
    }),

    // user info 
    allCourses: builder.query({
      query: () => ({
        url: "/course",
        method: "GET",
      }),
    }),
  }),
});

export const {
    useAllCoursesQuery,
    useSingleCourseQuery
} = authApi;