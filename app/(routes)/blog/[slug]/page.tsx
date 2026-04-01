// app/(routes)/blog/[slug]/page.tsx
"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, ArrowLeft, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StarHeader } from "@/components/shared/star-header";
import { use } from "react";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Simple markdown-to-HTML renderer for basic formatting
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const html: string[] = [];
  let inCode = false;
  let codeBuffer: string[] = [];
  let codeLang = "";

  for (const raw of lines) {
    const line = raw;

    // Code block toggle
    if (line.startsWith("```")) {
      if (!inCode) {
        inCode = true;
        codeLang = line.slice(3).trim();
        codeBuffer = [];
      } else {
        inCode = false;
        html.push(
          `<pre class="my-4 overflow-x-auto rounded-lg bg-muted p-4 text-sm"><code class="language-${codeLang}">${codeBuffer.join("\n").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code></pre>`
        );
        codeBuffer = [];
        codeLang = "";
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(line);
      continue;
    }

    // Headings
    if (line.startsWith("#### ")) {
      html.push(`<h4 class="mt-6 mb-2 text-base font-semibold">${renderInline(line.slice(5))}</h4>`);
    } else if (line.startsWith("### ")) {
      html.push(`<h3 class="mt-8 mb-3 text-lg font-bold">${renderInline(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      html.push(`<h2 class="mt-10 mb-4 text-2xl font-bold">${renderInline(line.slice(3))}</h2>`);
    } else if (line.startsWith("# ")) {
      html.push(`<h1 class="mt-12 mb-4 text-3xl font-bold">${renderInline(line.slice(2))}</h1>`);
    }
    // List items
    else if (line.startsWith("- ")) {
      html.push(`<li class="ml-4 list-disc">${renderInline(line.slice(2))}</li>`);
    } else if (/^\d+\. /.test(line)) {
      html.push(`<li class="ml-4 list-decimal">${renderInline(line.replace(/^\d+\. /, ""))}</li>`);
    }
    // Separator
    else if (line.trim() === "---") {
      html.push(`<hr class="my-8 border-border" />`);
    }
    // Empty line
    else if (line.trim() === "") {
      html.push(`<br />`);
    }
    // Paragraph
    else {
      html.push(`<p class="my-3 leading-relaxed text-muted-foreground">${renderInline(line)}</p>`);
    }
  }

  return html.join("\n");
}

function renderInline(text: string) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code class="rounded bg-muted px-1 py-0.5 text-sm font-mono">$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4 hover:no-underline">$1</a>');
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl"
          >
            <Button asChild variant="ghost" className="mb-6 -ml-2">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  <Tag className="mr-1 h-2.5 w-2.5" />
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <div className="mb-8 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
            </div>

            {post.coverImage && (
              <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
              </div>
            )}
          </motion.div>
        </div>
      </StarHeader>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl"
            dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
          />

          <div className="mx-auto mt-16 max-w-3xl border-t pt-8">
            <Button asChild variant="outline">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
