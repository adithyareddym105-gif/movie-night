import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Add a Language",
  description: "Create a new language collection.",
};

export default function NewLanguagePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <Link
        href="/languages"
        className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
      >
        ← Back to languages
      </Link>

      <section>
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Grow your collection
        </p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Add a language
        </h1>
        <p className="mt-3 text-slate-500">
          Create a space for the vocabulary you want to learn.
        </p>
      </section>

      <form className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
            Language name
          </label>
          <input
            id="name"
            name="name"
            placeholder="e.g. Italian"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="level" className="mb-2 block text-sm font-semibold text-slate-700">
            Your current level
          </label>
          <select
            id="level"
            name="level"
            defaultValue=""
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-indigo-500"
          >
            <option value="" disabled>Select your level</option>
            <option>Beginner</option>
            <option>A1</option>
            <option>A2</option>
            <option>B1</option>
            <option>B2</option>
            <option>C1</option>
            <option>C2</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block text-sm font-semibold text-slate-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="What would you like to achieve?"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="button"
          disabled
          className="w-full cursor-not-allowed rounded-xl bg-indigo-300 px-5 py-3 font-semibold text-white"
        >
          Saving not enabled in this milestone
        </button>
        <p className="text-center text-xs text-slate-400">
          This form is a visual prototype. Your information will not be saved.
        </p>
      </form>
    </div>
  );
}
