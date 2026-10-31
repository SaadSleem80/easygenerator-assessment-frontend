import { Navigate, Outlet } from "react-router";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

export default function GuestRoute() {
  const { data: user, isPending } = useCurrentUser();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
