# Personal Blog

A dark, red-accented personal blog built with Next.js, TypeScript, Tailwind CSS, App Router, MDX, and Framer Motion.

## Run locally

```bash
cd personal-blog
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build static files

```bash
npm run build
```

The static site is generated in `out/`.

Preview the exported site:

```bash
npm run preview
```

## Add a post

Create a new `.mdx` file in `src/content/posts`.

```mdx
---
title: "My New Post"
excerpt: "Short summary shown on the blog list."
date: "2026-05-17"
category: "Writing"
readingTime: "3 min read"
---

Write your post here.
```

## Deploy to GitHub Pages

This project includes `.github/workflows/deploy.yml`.

1. Push the project to GitHub.
2. In GitHub, open Settings → Pages.
3. Set Source to GitHub Actions.
4. Push to the `main` branch.

GitHub Actions will build the static site and publish the `out/` folder.
