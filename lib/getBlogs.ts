import { ApiResponse, BlogPost } from "@/types/blog";

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const res = await fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10",
      {
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error("API returned error:", res.status);
      return [];
    }

    const data: ApiResponse = await res.json();
    return data.blogs || [];
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
}
