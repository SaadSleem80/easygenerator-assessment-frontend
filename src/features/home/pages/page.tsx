import { useSignOut } from "@/features/auth/hooks/use-signout";
import { House } from "lucide-react";

export default function HomePage() {
  const { mutate: logout, isPending } = useSignOut();

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-12 text-center">
          {/* Welcome Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
            <House size={32} strokeWidth={1.8} className="text-indigo-600" />
          </div>

          {/* Welcome Message */}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome to the application.
          </h1>

          <p className="mt-3 text-base leading-7 text-slate-500">
            You have successfully signed in. We're glad to have you here!
          </p>

          {/* Logout */}
          <div className="mt-8">
            <button
              type="button"
              onClick={() => logout()}
              disabled={isPending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isPending ? "Signing out..." : "Sign out"}
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Thank you for using our application.
        </p>
      </div>
    </main>
  );
}
