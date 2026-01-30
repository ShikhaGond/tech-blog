import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
metadataBase: new URL("https://tech-blog-rbjulneu9-shikhagond18-gmailcoms-projects.vercel.app"),

  title: "Tech Blog | Latest Tech Articles",
  description:
    "A fast, SEO-optimized tech blog built with Next.js, TypeScript, and Tailwind CSS.",
  openGraph: {
    title: "Tech Blog",
    description: "Latest technology articles and tutorials",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog",
    description: "Latest technology articles and tutorials",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">{children}</body>
    </html>
  );
}
