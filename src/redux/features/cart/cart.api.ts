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
      providesTags: ["CART"]
    }),
    // delete course cart 
    deleteCourseCart: builder.mutation({
      query: (courseId) => ({
        url: `/cart/course/remove/${courseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CART"]
    }),
  // ----------- BOOK -------------
    addBookCart: builder.mutation({
      query: (bookCartInfo) => ({
        url: "/cart/book/add", // make sure endpoint matches backend
        method: "POST",
        data: bookCartInfo, // 👈 use body instead of data
      }),
    }),

    removeBookFromCart: builder.mutation<void, string>({
      query: (bookId) => ({
        url: `/cart/book/remove/${bookId}`, // matches your backend route
        method: "DELETE",
      }),
      invalidatesTags: ["BOOKCART"]
    }),

    getBookCart: builder.query({
      query: () => ({
        url: "/cart/book/me",
        method: "GET",
      }),
      providesTags: ["BOOKCART"]
    }),
  }),

});

export const {
    useGetCourseCartQuery,
    useAddCourseCartMutation,
    useDeleteCourseCartMutation,


    useGetBookCartQuery,
    useAddBookCartMutation,
    useRemoveBookFromCartMutation
} = cartApi;