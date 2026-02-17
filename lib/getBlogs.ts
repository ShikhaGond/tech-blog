import { ApiResponse, BlogPost } from "@/types/blog";

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10",
      {
        next: { revalidate: 3600 }, // cache for 1 hour
      }
    );

    if (!res.ok) {
      console.error("API returned error:", res.status);
      return []; // Don't crash app
    }

    const data: ApiResponse = await res.json();

    if (!data?.blogs) {
      console.error("Invalid API response");
      return [];
    }

    return data.blogs;
  } catch (error) {
    console.error("Fetch failed:", error);
    return []; // Graceful fallback
  }
}
