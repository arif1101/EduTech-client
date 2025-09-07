import { baseApi } from "@/redux/baseApi";

export const bookApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    singleBook: builder.query({
      query: (id) => ({
        url: `/book/${id}`,
        method: "GET",
      }),
    }),

    // user info 
    allBooks: builder.query({
      query: () => ({
        url: "/book",
        method: "GET",
      }),
    }),
  }),
});

export const {
    useAllBooksQuery,
    useSingleBookQuery
} = bookApi;