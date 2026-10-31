import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

export default function ProtectedRoute() {
  const { data: user } = useCurrentUser();

  if (!user) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}
