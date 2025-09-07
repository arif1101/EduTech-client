import { baseApi } from "@/redux/baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCourseCart: builder.mutation({
      query: (courseId) => ({
        url: "/cart/course/add",
        method: "POST",
        data: courseId,
      }),
    }),
    // get course
    getCourseCart: builder.query({
      query: () => ({
        url: "/cart/course/me",
        method: "GET",
      }),
    }),
  // ----------- BOOK -------------
    addBookCart: builder.mutation({
      query: (bookCartInfo) => ({
        url: "/cart/book/add", // make sure endpoint matches backend
        method: "POST",
        data: bookCartInfo, // 👈 use body instead of data
      }),
    }),


    getBookCart: builder.query({
      query: () => ({
        url: "/cart/book/me",
        method: "GET",
      }),
    }),
  }),



});

export const {
    useGetCourseCartQuery,
    useAddCourseCartMutation,
    useGetBookCartQuery,
    useAddBookCartMutation
} = cartApi;