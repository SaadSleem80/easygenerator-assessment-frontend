import type { ReactNode } from "react";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

interface Props {
  children: ReactNode;
}

export default function AuthInitializer({ children }: Props) {
  const { isPending, isError, refetch } = useCurrentUser();

  if (isPending) {
    return null;
  }

  if (isError) {
    return (
      <div>
        Unable to verify your session.{" "}
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return children;
}
