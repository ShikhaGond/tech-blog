import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=10",
    {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
    }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
