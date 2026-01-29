import { getBlogs } from "@/lib/getBlogs";
import BlogClient from "@/components/BlogClient";

export default async function HomePage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Tech Blog",
            url: "http://localhost:3000",
            description:
              "A fast, SEO-optimized tech blog built with Next.js, TypeScript, and Tailwind CSS.",
          }),
        }}
      />
      <BlogClient blogs={blogs} />
    </main>
  );
}
