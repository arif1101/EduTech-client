import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    // registerp 
    register: builder.mutation({
        query: (userInfo) => ({
            url: "/user/register",
            method: "POST",
            data: userInfo,
        }),
    }),
    // logut 
    logout: builder.mutation({
        query: () => ({
            url: "/auth/logout",
            method: "POST",
        }),
    }),
    // user info 
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useUserInfoQuery,
  useLogoutMutation
} = authApi;