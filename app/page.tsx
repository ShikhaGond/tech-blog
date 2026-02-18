import BlogClient from "@/components/BlogClient";
import { blogs } from "@/data/blogs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Tech Blog",
            url: "https://tech-blog-lilac-eight.vercel.app",
            description:
              "A fast, SEO-optimized tech blog built with Next.js, TypeScript, and Tailwind CSS.",
          }),
        }}
      />
      <BlogClient blogs={blogs} />
    </main>
  );
}
