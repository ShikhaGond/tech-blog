* `YOUR_VERCEL_URL`


---

# Tech Blog Website – SEO Optimized

A fast, responsive, and SEO-optimized tech blog website built using **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.
The application fetches blog data from a public API and supports searching, category filtering, and viewing full articles in a modal.

---

## 🚀 Live Demo

**Deployed on Vercel:**
👉 [https://YOUR_VERCEL_URL.vercel.app](https://YOUR_VERCEL_URL.vercel.app)

---

## 🛠️ Technologies Used

* **Next.js (App Router)**
* **TypeScript**
* **Tailwind CSS**
* **Git & GitHub**
* **Vercel (Deployment)**

---

## 📦 Features

### Home Page

* Header
* Hero section
* Article grid with 10 blog posts
* Footer

### Search Functionality

* Search across:

  * Title
  * Description
  * Content
* Displays result count
* Shows “No results found” when applicable

### Category Filter

* Displays all unique categories from API
* Allows filtering by category
* Active category is visually highlighted
* Works together with search (combined filtering)

### Article Modal

* Opens full article on click
* Close options:

  * Close (X) button
  * ESC key
  * Click outside modal

### Responsive Design

* Mobile: 1 column
* Tablet: 2 columns
* Desktop: 3 columns

---

## 🔍 SEO Strategy

### 1. Meta Tags

Implemented using Next.js Metadata API:

* **Title** (≤ 60 characters)
* **Meta Description** (≤ 160 characters)
* **Open Graph Tags**

  * og:title
  * og:description
  * og:image
* **Twitter Card Tags**

  * summary_large_image

These improve:

* Search engine visibility
* Social media previews

---

### 2. Semantic HTML

Used proper HTML5 semantic elements:

* `<header>`
* `<main>`
* `<section>`
* `<article>`
* `<nav>`
* `<footer>`
* `<time>`

Heading hierarchy:

* One `<h1>` per page
* Followed by `<h2>` and `<h3>` without skipping levels

This improves:

* Accessibility
* SEO
* Screen reader support

---

### 3. Structured Data (JSON-LD)

Implemented schema.org structured data:

* **WebSite schema** on homepage
* **Article schema** for each blog post

This helps search engines:

* Understand page purpose
* Improve rich results

---

### 4. Image Optimization

* Used Next.js `<Image>` component
* Lazy loading enabled by default
* Descriptive `alt` text for each image
* Remote image domain configured in `next.config.ts`

Benefits:

* Faster load time
* Better Lighthouse performance
* Improved accessibility

---

### 5. Technical SEO

* `robots.txt` generated using `app/robots.ts`
* `sitemap.xml` generated using `app/sitemap.ts`
* Clean URL structure (`/`)
* Server-side data fetching for better SEO

---

## ⚡ Performance Optimizations

* Server-side data fetching
* Minimal client-side JavaScript
* Optimized images via Next/Image
* Tailwind CSS utility classes
* No unnecessary libraries
* API caching disabled for fresh data

Target Lighthouse Scores:

* Performance: **90+**
* SEO: **95+**
* Accessibility: **85+**
* Best Practices: **90+**

---

## 🔎 Search & Filter Implementation

### Search

* Client-side filtering
* Matches query against:

  * `title`
  * `description`
  * `content_text`

### Category Filter

* Extracts unique categories from API data
* Allows filtering by selected category

### Combined Logic

Search and category filter work together:

```ts
matchesSearch && matchesCategory
```

This ensures accurate filtered results.

---

## ⌨️ Accessibility & UX

* Keyboard navigation supported:

  * Tab navigation
  * Enter to open article
  * ESC to close modal
* Color contrast meets WCAG AA standards
* Proper focus handling for interactive elements

---

## 🧪 Error Handling

* Loading state displayed while fetching data
* Graceful error message if API fails
* Prevents app crash on invalid responses

---

## 🧩 Challenges Faced

* Handling external API CORS restrictions
* Configuring Next/Image remote domains
* Implementing accessible modal behavior
* Maintaining SEO while using client-side filtering

All issues were resolved using:

* Server-side fetching
* Domain configuration
* Keyboard event handling

---

## 📁 Project Structure

```
tech-blog/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── globals.css
│
├── components/
│   └── BlogClient.tsx
│
├── lib/
│   └── getBlogs.ts
│
├── types/
│   └── blog.ts
│
├── public/
│   └── og.png
│
├── screenshots/
│   ├── lighthouse-performance.png
│   ├── lighthouse-seo.png
│   ├── lighthouse-accessibility.png
│   └── lighthouse-best-practices.png
│
└── README.md
```

---

## 📸 Lighthouse Audit Screenshots

Screenshots are stored in `/screenshots` directory:

* Performance
* SEO
* Accessibility
* Best Practices

(Images referenced here must be committed in GitHub)

---

## ▶️ How to Run Locally

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 📤 Deployment

Deployed using **Vercel (Free Tier)**:

```bash
git push
vercel deploy
```

---

## 📌 API Used

```
https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10
```

---

## 👨‍💻 Author

Built by **Shikha Gond**

