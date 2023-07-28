import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import UserDashboardBS from "./dashboard/UserDashboardBS";

export default function Protected() {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <p> loading...</p>;
  }

  if (!isLoading && !user) {
    return <Navigate to="/login" />;
  }

  if (!isLoading && user) {
    return <UserDashboardBS/>
  }
}
