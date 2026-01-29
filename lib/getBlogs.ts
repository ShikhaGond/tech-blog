export async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blogs");

  const data = await res.json();
  return data.blogs;
}
