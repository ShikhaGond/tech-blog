"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

export default function BlogClient({ blogs }: { blogs: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [dark, setDark] = useState(false);
  
useEffect(() => {
  const handler = (e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedBlog(null);
  };
  window.addEventListener("keydown", handler);
  return () => window.removeEventListener("keydown", handler);
}, []);

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  const filteredBlogs = blogs.filter((blog) => {
    const q = search.toLowerCase();
    const matchesSearch =
      blog.title.toLowerCase().includes(q) ||
      (blog.description || "").toLowerCase().includes(q) ||
      (blog.content_text || "").toLowerCase().includes(q);

    const matchesCategory = category === "All" || blog.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white text-black dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        {/* HEADER */}
        <header className="bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">Tech Blog</h1>
            <button
              onClick={() => setDark(!dark)}
              className="border px-3 py-1 rounded text-sm bg-white/10 hover:bg-white/20"
              aria-label="Toggle dark mode"
            >
              {dark ? "Light" : "Dark"}
            </button>
          </div>
        </header>

        {/* HERO */}
        <section className="bg-gray-50 dark:bg-gray-900 border-b dark:border-gray-800 transition-colors">
          <div className="max-w-6xl mx-auto px-4 py-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Latest Technology Articles
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Explore articles on software development, AI, and modern tech
              trends. Fast, SEO-optimized and accessible.
            </p>

            <input
              type="search"
              aria-label="Search articles"
              placeholder="Search articles..."
              className="mt-6 w-full md:w-2/3 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </section>

        {/* FILTER */}
        <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full border text-sm transition
              ${
                category === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* RESULT COUNT */}
        <p className="max-w-6xl mx-auto px-4 text-sm text-gray-600 dark:text-gray-400">
          {filteredBlogs.length} article(s) found
        </p>

        {/* GRID */}
        <section className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogs.length === 0
        ? Array.from({ length: 6 }).map((_, i) => (
        <div
        key={i}
        className="animate-pulse border rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 h-64"
    />
    ))
: filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  tabIndex={0}
                  onClick={() => setSelectedBlog(blog)}
                  onKeyDown={(e) => e.key === "Enter" && setSelectedBlog(blog)}
                  className="group border rounded-xl overflow-hidden bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-200 cursor-pointer"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.photo_url}
                      alt={`Cover image for ${blog.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4">
                    <h2 className="font-semibold text-lg leading-snug mb-1">
                      {blog.title}
                    </h2>

                    <time className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(blog.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                      {blog.description}
                    </p>
                  </div>
                </article>
              ))}
        </section>

        {/* MODAL */}
        {selectedBlog && (
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fade"
            onClick={() => setSelectedBlog(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 max-w-3xl w-full rounded-xl p-6 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBlog(null)}
                className="float-right text-xl"
                aria-label="Close article"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold">{selectedBlog.title}</h2>

              <time className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(selectedBlog.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>

              <article
                className="prose dark:prose-invert max-w-none mt-4"
                dangerouslySetInnerHTML={{
                  __html: selectedBlog.content_html,
                }}
              />

              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: selectedBlog.title,
                    image: selectedBlog.photo_url,
                    datePublished: selectedBlog.created_at,
                    description: selectedBlog.description,
                  }),
                }}
              />
            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="border-t dark:border-gray-800 bg-gray-50 dark:bg-gray-900 mt-8">
          <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Tech Blog. Built with Next.js.
          </div>
        </footer>
      </div>
    </div>
  );
}
