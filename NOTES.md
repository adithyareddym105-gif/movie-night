# Notes

## Lab 1

1. **Where are `<html>` and `<body>`?** In `app/layout.tsx`, the root layout.
2. **Which file renders `/`?** `app/page.tsx`.
3. **Where do static files go?** In the `public/` folder. They are served from the root URL, so `public/next.svg` is available at `/next.svg`.
4. **What does `tsconfig.json` do?** It configures TypeScript for the project: compiler options, which files are included, and the `@/*` path alias.
5. **What does `@/*` mean?** It maps to the project root, so `@/lib/movies` means `lib/movies.ts`. Example: `import { getMovies } from "@/lib/movies";`
6. **What does `layout.tsx` import from `next/font/google`?** The Geist and Geist_Mono fonts. At build time Next.js downloads the font files and serves them from my own site, so the browser makes no requests to Google.
7. **`layout.tsx` vs `page.tsx`?** A layout wraps pages and stays the same when navigating between them. A page is the unique content for one URL.
8. **Where does a navbar for every page go?** In `app/layout.tsx`, inside `<body>` above `{children}`.
9. **What is `globals.css` for?** It holds global styles and imports Tailwind CSS. It is imported in `app/layout.tsx`.
10. **What is `AGENTS.md`?** A file with instructions for AI coding agents so they write up-to-date Next.js code. The app does not need it to run.