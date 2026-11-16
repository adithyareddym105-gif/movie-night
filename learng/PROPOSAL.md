# Project proposal

* Name:Adithya Reddy MANDA
* Project title: learng, a language learning tracker
* Pitch (one sentence): A site where learners keep a vocabulary list for each language they study.
* Target users: Students and self-learners studying one or more languages

## Pages

| URL | Content | Dynamic segment? | Rendering strategy and why |
|---|---|---|---|
| / | Intro and links to the languages | No | Static: the content never changes |
| /languages | List of all languages with word counts | No | ISR (revalidate): changes rarely, needs to be fast and indexable |
| /languages/[slug] | One language and its vocabulary list | Yes, [slug] | ISR with generateStaticParams: public SEO page, updates when words are added |
| /languages/new | Form to add a language | No | Static shell, with a client-side form for the write action |
| /languages/[slug]/words/new | Form to add a word | Yes, [slug] | Dynamic: depends on the language in the URL |

## Data

Entities (2 to 4), their main fields, and how they are related:

* Language: id, name, slug, description, level
* Word: id, term, translation, exampleSentence, createdAt, languageId
* Relation: one Language has many Words (one-to-many)

## Write actions

What users can create, update or delete:

* Add a language
* Add, edit and delete words in a language

## Repository

GitHub URL: https://github.com/adithyareddym105-gif/learng