import { Link } from "react-router";
import { ArrowLeft, House, SearchX } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-indigo-50">
          <SearchX size={38} className="text-indigo-600" strokeWidth={1.6} />
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
          Error 404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-base leading-7 text-slate-500">
          Sorry, we couldn't find the page you're looking for. It may have been
          moved or the URL might be incorrect.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <House size={18} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <p className="mt-12 text-xs text-slate-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </main>
  );
}
