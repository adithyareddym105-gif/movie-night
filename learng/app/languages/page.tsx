import type { Metadata } from "next";
import Link from "next/link";
import { languages, getWordsByLanguage } from "@/lib/data";

export const metadata: Metadata = {
  title: "My Languages",
  description: "Browse your language collections and vocabulary progress.",
};

export default function LanguagesPage() {
  return (
    <div className="space-y-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Your learning journey
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          My languages
        </h1>
        <p className="mt-3 text-slate-500">
          Explore your collections and keep building your vocabulary.
        </p>
      </section>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {languages.map((language) => {
          const count = getWordsByLanguage(language.id).length;

          return (
            <article
              key={language.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-xl bg-indigo-50 px-3 py-2 text-lg font-bold text-indigo-700">
                  {language.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {language.level}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-slate-900">
                {language.name}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {language.description}
              </p>
              <p className="mt-4 text-sm font-medium text-slate-600">
                {count} {count === 1 ? "word" : "words"} collected
              </p>
              <Link
                href={`/languages/${language.slug}`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Open collection →
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
