import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Afthal Ahamad | Junior Full Stack Developer",
  description:
    "Junior Full Stack Developer building production web applications with React.js, Node.js, Express.js, and MongoDB. Based in Kegalle, Sri Lanka.",
  metadataBase: new URL("https://github.com/afthal-ahamad01"),

  // Basic metadata
  applicationName: "Afthal Ahamad Portfolio",
  authors: [{ name: "Afthal Ahamad" }],
  keywords: [
    "Full Stack Developer",
    "Junior Developer",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JavaScript",
    "TypeScript",
    "Sri Lanka",
    "Web Developer",
  ],

  openGraph: {
    type: "website",
    url: "https://github.com/afthal-ahamad01",
    title: "Afthal Ahamad | Junior Full Stack Developer",
    description:
      "Junior Full Stack Developer building production web applications with React.js, Node.js, Express.js, and MongoDB.",
    siteName: "Afthal Ahamad",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Afthal Ahamad - Portfolio",
      },
    ],
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: { url: "/apple-touch-icon.png" },
  },

  alternates: {
    canonical: "https://github.com/afthal-ahamad01",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
