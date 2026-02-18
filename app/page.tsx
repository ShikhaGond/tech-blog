import BlogClient from "@/components/BlogClient";
import { getBlogs } from "@/lib/getBlogs";

export default async function HomePage() {
  const blogs = await getBlogs(); // safe version (must not throw)

  return (
    <main className="min-h-screen">
      {/* WebSite Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Tech Blog",
            url: "https://tech-blog-lilac-eight.vercel.app", // replace with your real URL
            description:
              "A fast, SEO-optimized tech blog built with Next.js, TypeScript, and Tailwind CSS.",
          }),
        }}
      />

      <BlogClient blogs={blogs} />
    </main>
  );
}
