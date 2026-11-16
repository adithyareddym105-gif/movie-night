import languagesData from "@/data/languages.json";
import wordsData from "@/data/words.json";

export type Language = {
  id: string;
  name: string;
  slug: string;
  description: string;
  level: string;
};

export type Word = {
  id: string;
  term: string;
  translation: string;
  exampleSentence: string;
  createdAt: string;
  languageId: string;
};

export const languages = languagesData as Language[];
export const words = wordsData as Word[];

export function getLanguage(slug: string) {
  return languages.find((language) => language.slug === slug);
}

export function getWordsByLanguage(languageId: string) {
  return words.filter((word) => word.languageId === languageId);
}
