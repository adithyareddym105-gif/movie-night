import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">
        Error 404
      </p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-slate-500">
        Sorry, we could not find the page you were looking for.
      </p>
      <Link
        href="/"
        className="mt-7 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Back to home
      </Link>
    </div>
  );
}

