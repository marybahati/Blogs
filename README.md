This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# Blogs Post App

This project is a simple blogging app built with Next.js, TypeScript, and Tailwind CSS.

## Features

1. **Blog Home Page:**
   - Displays a list of blog posts.
   - Each post shows the title, publication date, and a brief excerpt.
   - Styled using Tailwind CSS.

2. **Blog Post Page:**
   - Dynamic route for individual blog posts (e.g., `/posts/[slug]`).
   - Displays the full content of a blog post.
   - Includes a back button to navigate back to the homepage.
   - Styled using Tailwind CSS.

3. **Blog Data:**
   - Sample blog posts data stored in `blogData.js`.
   - Each post has properties like title, date, slug, and content.

4. **Responsive Design:**
   - Ensures responsiveness across various screen sizes.
   - Utilizes Tailwind CSS classes for responsiveness.

5. **Bonus (Optional):**
   - Pagination on the homepage.
   - Search functionality to filter blog posts based on keywords.

## Installation

1. Clone the repository:
```bash
   git clone https://github.com/marybahati/Blogs.git

2. Navigate to the project directory:

3. Install dependencies:
```bash
    npm install or yarn install

4. Usage

    Run the development server:


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
