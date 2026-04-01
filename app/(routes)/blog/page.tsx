// app/(routes)/blog/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CalendarDays, Clock, Tag, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogs";
import { StarHeader } from "@/components/shared/star-header";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Blog
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Thoughts, tutorials, and experiences from building real-world web applications.
            </p>
          </motion.div>
        </div>
      </StarHeader>

      <section className="pb-12 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {blogPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center justify-center space-y-4 py-24 text-center text-muted-foreground"
            >
              <CalendarDays className="h-12 w-12 opacity-40" />
              <p className="text-lg">No blog posts yet. Check back soon!</p>
            </motion.div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="flex h-full flex-col border-2 transition-all hover:border-primary">
                    {post.coverImage && (
                      <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          className="object-cover object-top transition-transform hover:scale-105"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={index < 2}
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="mb-2 flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            <Tag className="mr-1 h-2.5 w-2.5" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="line-clamp-2 leading-snug">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readingTime}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="default" size="sm" className="group w-full">
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          Read Post
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
