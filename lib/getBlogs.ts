import { ApiResponse } from "@/types/blog";

export async function getBlogs() {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10",
    {
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "User-Agent": "Mozilla/5.0",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data: ApiResponse = await res.json();
  return data.blogs;
}
