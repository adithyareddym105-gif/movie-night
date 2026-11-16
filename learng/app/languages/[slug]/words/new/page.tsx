import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLanguage } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const language = getLanguage(slug);

  return {
    title: language ? `Add a ${language.name} Word` : "Language not found",
  };
}

export default async function NewWordPage({ params }: Props) {
  const { slug } = await params;
  const language = getLanguage(slug);

  if (!language) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <Link
        href={`/languages/${language.slug}`}
        className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
      >
        ← Back to {language.name}
      </Link>

      <section>
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          {language.name} vocabulary
        </p>
        <h1 className="mt-2 text-4xl font-bold text-slate-900">
          Add a new word
        </h1>
        <p className="mt-3 text-slate-500">
          Save a new word and its meaning in your {language.name} collection.
        </p>
      </section>

      <form className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="term" className="mb-2 block text-sm font-semibold text-slate-700">
            Word or expression
          </label>
          <input
            id="term"
            name="term"
            required
            placeholder="Enter the word"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="translation" className="mb-2 block text-sm font-semibold text-slate-700">
            Translation
          </label>
          <input
            id="translation"
            name="translation"
            required
            placeholder="Enter the meaning"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
          />
        </div>

        <div>
          <label htmlFor="example" className="mb-2 block text-sm font-semibold text-slate-700">
            Example sentence
          </label>
          <textarea
            id="example"
            name="example"
            rows={3}
            placeholder="Use the word in a sentence"
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
