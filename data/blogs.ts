import { BlogPost } from "@/types/blog";

export const blogs: BlogPost[] = [
  {
    id: 1,
    user_id: 1,
    title: "Understanding Modern Web Development",
    description: "A deep dive into modern web development tools and practices.",
    content_text:
      "Modern web development involves frameworks like React, Next.js, and tools such as TypeScript and Tailwind CSS...",
    content_html:
      "<p>Modern web development involves frameworks like React, Next.js, and tools such as TypeScript and Tailwind CSS.</p><p>Performance, SEO, and accessibility are critical factors.</p>",
    photo_url: "/images/blog1.png",
    category: "Web Development",
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
  },
  {
    id: 2,
    user_id: 1,
    title: "Introduction to Artificial Intelligence",
    description: "An overview of AI and its real-world applications.",
    content_text:
      "Artificial Intelligence enables machines to simulate human intelligence...",
    content_html:
      "<p>Artificial Intelligence enables machines to simulate human intelligence.</p><p>It powers chatbots, recommendation systems, and more.</p>",
    photo_url: "/images/blog2.png",
    category: "AI",
    created_at: "2024-01-20",
    updated_at: "2024-01-20",
  },
  {
    id: 3,
    user_id: 1,
    title: "Mastering TypeScript",
    description: "Why TypeScript improves JavaScript development.",
    content_text:
      "TypeScript provides static typing, improving code reliability...",
    content_html:
      "<p>TypeScript provides static typing and improves maintainability.</p>",
    photo_url: "/images/blog3.png",
    category: "Programming",
    created_at: "2024-02-01",
    updated_at: "2024-02-01",
  },
  {
    id: 4,
    user_id: 1,
    title: "Building Scalable React Apps",
    description: "Best practices for structuring large React projects.",
    content_text:
      "Scalability in React requires modular architecture...",
    content_html:
      "<p>Use modular architecture and proper folder structures for scalability.</p>",
    photo_url: "/images/blog4.png",
    category: "Web Development",
    created_at: "2024-02-10",
    updated_at: "2024-02-10",
  },
  {
    id: 5,
    user_id: 1,
    title: "CSS Optimization Techniques",
    description: "Tips for writing efficient and maintainable CSS.",
    content_text:
      "Efficient CSS improves performance and readability...",
    content_html:
      "<p>Optimize CSS using utility-first frameworks like Tailwind.</p>",
    photo_url: "/images/blog5.png",
    category: "Design",
    created_at: "2024-02-18",
    updated_at: "2024-02-18",
  },
  {
    id: 6,
    user_id: 1,
    title: "Next.js App Router Explained",
    description: "Understanding the new App Router in Next.js.",
    content_text:
      "The App Router enables better layouts and server components...",
    content_html:
      "<p>The App Router introduces nested layouts and server components.</p>",
    photo_url: "/images/blog6.png",
    category: "Web Development",
    created_at: "2024-03-01",
    updated_at: "2024-03-01",
  },
  {
    id: 7,
    user_id: 1,
    title: "Improving Web Accessibility",
    description: "How to build inclusive web applications.",
    content_text:
      "Accessibility ensures everyone can use your website...",
    content_html:
      "<p>Use semantic HTML and proper ARIA labels.</p>",
    photo_url: "/images/blog7.png",
    category: "Accessibility",
    created_at: "2024-03-10",
    updated_at: "2024-03-10",
  },
  {
    id: 8,
    user_id: 1,
    title: "Understanding SEO Basics",
    description: "Foundations of search engine optimization.",
    content_text:
      "SEO helps websites rank higher in search engines...",
    content_html:
      "<p>Implement metadata, structured data, and fast performance.</p>",
    photo_url: "/images/blog8.png",
    category: "SEO",
    created_at: "2024-03-20",
    updated_at: "2024-03-20",
  },
  {
    id: 9,
    user_id: 1,
    title: "Server Components in Next.js",
    description: "Leveraging server components for better performance.",
    content_text:
      "Server components reduce client-side JavaScript...",
    content_html:
      "<p>Server components improve performance and SEO.</p>",
    photo_url: "/images/blog9.png",
    category: "Web Development",
    created_at: "2024-04-01",
    updated_at: "2024-04-01",
  },
  {
    id: 10,
    user_id: 1,
    title: "Deploying Apps on Vercel",
    description: "A guide to deploying Next.js apps on Vercel.",
    content_text:
      "Vercel simplifies deployment and scaling...",
    content_html:
      "<p>Vercel provides seamless deployment for Next.js applications.</p>",
    photo_url: "/images/blog10.png",
    category: "DevOps",
    created_at: "2024-04-10",
    updated_at: "2024-04-10",
  },
];
