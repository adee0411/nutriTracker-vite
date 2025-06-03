import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../../backend/authentication/authContext";
import DashboardLayout from "./Dashboard/DashboardLayout";

// Wrapper component for protected routes
const ProtectedRoute = () => {
  const authContext = useContext(AuthContext);

  const { isLoggedIn } = authContext;
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};

export default ProtectedRoute;
