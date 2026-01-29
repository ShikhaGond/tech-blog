"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BlogPost } from "@/types/blog";

export default function BlogClient({ blogs }: { blogs: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

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
    <>
      <header className="bg-black text-white p-4">
        <h1 className="text-2xl">Tech Blog</h1>
      </header>

      <section className="p-4">
        <input
          type="search"
          placeholder="Search articles..."
          className="border p-2 w-full rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <nav className="flex gap-2 mt-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1 border rounded ${
                category === cat ? "bg-black text-white" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <p className="mt-2">{filteredBlogs.length} result(s) found</p>

        {filteredBlogs.length === 0 && <p>No results found</p>}

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              tabIndex={0}
              onClick={() => setSelectedBlog(blog)}
              onKeyDown={(e) => e.key === "Enter" && setSelectedBlog(blog)}
              className="border p-3 cursor-pointer"
            >
              <Image
                src={blog.photo_url}
                alt={`Cover image for ${blog.title}`}
                width={400}
                height={200}
                loading="lazy"
              />
              <h2 className="font-bold">{blog.title}</h2>
              <time>
                {new Date(blog.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <p>{blog.description}</p>
            </article>
          ))}
        </section>
      </section>

      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="bg-white p-4 max-w-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setSelectedBlog(null)}>X</button>
            <h2>{selectedBlog.title}</h2>
            <article
              dangerouslySetInnerHTML={{
                __html: selectedBlog.content_html,
              }}
            />
          </div>
        </div>
      )}

      <footer className="p-4 text-center">© Tech Blog</footer>
    </>
  );
}
