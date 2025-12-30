# Advent of Code Blog

A simple Next.js blog built to share lessons learned from solving Advent of Code puzzles. Posts are written in MDX format with frontmatter for metadata.

## Features

- 📝 Write blog posts in MDX with frontmatter
- 🎨 Clean, responsive design with Tailwind CSS
- ✨ Syntax-highlighted code blocks
- 📱 Mobile-friendly layout
- ⚡ Static site generation for fast loading
- 🚀 Vercel-ready deployment

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) to see the result.

## Writing Posts

1. Create a new MDX file in `content/blog/`:
```
content/blog/my-post.mdx
```

2. Add frontmatter at the top:
```mdx
---
title: "My Post Title"
date: "2024-12-30"
description: "A brief description"
tags: ["tag1", "tag2"]
---

# Your content here
```

3. Your post will automatically appear at `/blog/my-post`

## Deploy on Vercel

1. Push your code to GitHub
2. Connect your GitHub repo to [Vercel](https://vercel.com/new)
3. Deploy automatically on every push to main

## Project Structure

```
├── app/
│   ├── blog/
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/page.tsx   # Individual posts
│   └── page.tsx              # Home page
├── content/blog/             # MDX blog posts
├── lib/
│   └── mdx.ts               # MDX parsing utilities
└── ...
```
