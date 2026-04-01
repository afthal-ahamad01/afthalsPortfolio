export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  url: string;
  tags: string[];
  date: string; // ISO date string e.g. "2025-12-01"
  readingTime: string; // e.g. "5 min read"
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "preparing-for-google-summer-of-code-as-a-beginner",
    title: "Preparing for Google Summer of Code as a Beginner Developer",
    excerpt:
      "A personal journey of preparing for Google Summer of Code, sharing lessons from my first attempt, open-source contributions, and practical advice for beginner developers starting their GSoC journey.",
    url: "https://medium.com/@afthal.dev/preparing-for-google-summer-of-code-as-a-beginner-developer-75407124015a",
    tags: ["Open Source", "Google Summer of Code", "Software Development", "Programming", "Developers"],
    date: "2026-04-01",
    readingTime: "4 min read",
    coverImage: "/images/gsoc.webp",
  },
  {
    id: "2",
    slug: "my-first-open-source-contribution-translating-hugin-mobile",
    title: "My First Open-Source Contribution: Translating Hugin Mobile into Italian",
    excerpt:
      "A story about making my first open-source contribution by translating Hugin Mobile into Italian, and how this small step helped me start my journey in the open-source community.",
    url: "https://medium.com/@afthal.dev/my-first-open-source-contribution-translating-hugin-mobile-into-italian-9a8842423459",
    tags: ["Open Source", "Hugin Mobile", "GitHub", "Software Development", "Developers"],
    date: "2025-02-02",
    readingTime: "3 min read",
    coverImage: "/images/hugin.webp",
  },
];
