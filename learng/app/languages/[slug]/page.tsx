import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { languages, getLanguage, getWordsByLanguage } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return languages.map((language) => ({
    slug: language.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const language = getLanguage(slug);

  if (!language) {
    return { title: "Language not found" };
  }

  return {
    title: language.name,
    description: `Explore your ${language.name} vocabulary collection.`,
  };
}

export default async function LanguagePage({ params }: Props) {
  const { slug } = await params;
  const language = getLanguage(slug);

  if (!language) {
    notFound();
  }

  const vocabulary = getWordsByLanguage(language.id);

  return (
    <div className="space-y-8">
      <Link
        href="/languages"
        className="text-sm font-semibold text-indigo-600 hover:text-indigo-800"
      >
        ← Back to languages
      </Link>

      <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Language collection
            </p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              {language.name}
            </h1>
            <p className="mt-3 text-slate-500">{language.description}</p>
          </div>
          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
            Level {language.level}
          </span>
        </div>
        <p className="mt-6 text-sm font-medium text-slate-600">
          {vocabulary.length} vocabulary words
        </p>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">My vocabulary</h2>
          <Link
            href={`/languages/${language.slug}/words/new`}
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            + Add a word
          </Link>
        </div>

        {vocabulary.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
            No words yet. Add your first word to get started.
          </p>
        ) : (
          <div className="space-y-3">
            {vocabulary.map((word) => (
              <article
                key={word.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {word.term}
                    </h3>
                    <p className="mt-1 font-medium text-indigo-700">
                      {word.translation}
                    </p>
                  </div>
                  <time
                    dateTime={word.createdAt}
                    className="text-xs text-slate-400"
                  >
                    Added {word.createdAt}
                  </time>
                </div>
                <p className="mt-4 rounded-xl bg-slate-50 p-3 text-sm italic text-slate-600">
                  “{word.exampleSentence}”
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
