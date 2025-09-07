
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/type/type";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
  return function AuthWrapper() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    console.log("from with auth : ", data?.data?.user?.email)
    

    if (!isLoading && !data?.data?.user?.email) {
      return <Navigate to="/login" />;
    }

    console.log("from withauth",requiredRole)//ADMIN

    // if (requiredRole && !isLoading) {
    //   return <Navigate to="/unauthorized" />;
    // }

    return <Component />;
  };
};