# Notes

## Lab 1 — Understanding the Next.js Project

1. **Where are `<html>` and `<body>` defined?**
   They are both in `app/layout.tsx`. This is the main layout that wraps all the pages in the application.

2. **Which file is responsible for the homepage (`/`)?**
   The homepage is created using `app/page.tsx`. Next.js automatically uses this file for the root URL.

3. **Where should we put static files?**
   Static files like images and icons go inside the `public/` folder. For example, `public/next.svg` can be accessed through `/next.svg`.

4. **What is the purpose of `tsconfig.json`?**
   It contains the TypeScript settings for the project. It also helps configure things like file paths and the compiler.

5. **What does `@/*` mean in imports?**
   It is a shortcut for importing files from the project root. For example, instead of writing a long relative path, I can use `@/lib/movies`.

6. **What does `layout.tsx` import from `next/font/google`?**
   It imports the Geist and Geist Mono fonts. Next.js downloads and serves these fonts with the application, so the browser doesn't need to request them directly from Google.

7. **What is the difference between `layout.tsx` and `page.tsx`?**
   A layout is shared between pages, so common elements stay the same when navigating. A page contains the actual content for a particular URL.

8. **Where would we add a navbar that appears on every page?**
   I would add it to `app/layout.tsx`, inside the body and above `{children}`, so it appears across the whole application.

9. **What is `globals.css` used for?**
   It contains the styles that apply across the application. It also imports Tailwind CSS and is loaded through the root layout.

10. **What is `AGENTS.md`?**
    It contains instructions for AI coding tools working on the project. It helps them follow the correct conventions, but the application itself does not depend on this file to run.

## Lab 2 — Server and Client Rendering

1. **Are the movie titles visible in the page source?**
   On `/movies`, yes. The movie data is loaded on the server, so the titles are already included in the HTML. On `/movies-client`, the initial page source only shows the loading message because the data is fetched later in the browser using `useEffect`.

2. **What happens if we build the project again tomorrow without changing anything?**
   The `/movies` page will get a new timestamp from the time of that build. After the build, the timestamp stays the same when we refresh the page because the content is already generated.

3. **When would `force-dynamic` be useful?**
   I would use it when a page needs to show fresh information every time someone visits it. For example, a page showing live stock availability or account-specific information.

4. **A classmate sees `[movies] rendered 6 movies` in the browser console and thinks the code runs in the browser. What would you explain?**
   I would explain that the log comes from the server, not the browser. We can check the terminal running Next.js to see it. The movie titles also appear in the page source, which shows that the server generated the HTML.

5. **Which version would you choose for a public movie catalogue that changes once a week?**
   I would choose the static server-rendered version. It loads quickly and doesn't need to fetch the same data on every visit. We can simply rebuild and redeploy the application whenever the movie list changes.
