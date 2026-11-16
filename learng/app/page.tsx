import Link from "next/link";
import { languages, getWordsByLanguage } from "@/lib/data";

export default function Home() {
  const totalWords = languages.reduce(
    (total, language) => total + getWordsByLanguage(language.id).length,
    0
  );

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-gradient-to-r from-indigo-700 to-violet-600 px-8 py-12 text-white shadow-lg">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-200">
          Your learning space
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Every new word brings you closer to fluency.
        </h1>
        <p className="mt-4 max-w-xl text-indigo-100">
          Keep your vocabulary organized, follow your progress, and make
          language learning a daily habit.
        </p>
        <Link
          href="/languages"
          className="mt-7 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
        >
          Explore my languages
        </Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Languages learning</p>
          <p className="mt-2 text-4xl font-bold text-slate-900">{languages.length}</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Words collected</p>
          <p className="mt-2 text-4xl font-bold text-slate-900">{totalWords}</p>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Your collection
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              My languages
            </h2>
          </div>
          <Link
            href="/languages"
            className="text-sm font-semibold text-indigo-700 hover:text-indigo-900"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {languages.map((language) => {
            const count = getWordsByLanguage(language.id).length;

            return (
              <Link
                key={language.id}
                href={`/languages/${language.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-xl bg-indigo-50 px-3 py-2 text-lg font-bold text-indigo-700">
                    {language.name.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {language.level}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-indigo-700">
                  {language.name}
                </h3>
                <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                  {language.description}
                </p>
                <p className="mt-5 border-t border-slate-100 pt-4 text-sm font-medium text-slate-600">
                  {count} {count === 1 ? "word" : "words"} collected
                  <span className="float-right text-indigo-600">Explore →</span>
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
