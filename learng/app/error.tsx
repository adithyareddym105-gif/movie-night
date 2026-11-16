"use client";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-red-600">
        Something went wrong
      </p>
      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        We could not load this page
      </h1>
      <p className="mt-3 max-w-md text-slate-500">
        An unexpected error occurred. Please try again.
      </p>
      {error.digest && (
        <p className="mt-2 text-xs text-slate-400">
          Error reference: {error.digest}
        </p>
      )}
      <button
        onClick={() => retry()}
        className="mt-7 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700"
      >
        Try again
      </button>
    </div>
  );
}


