// components/home/contributions.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GitMerge, Github, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contributions } from "@/data/contributions";

const typeLabel: Record<string, string> = {
  "open-source": "Open Source",
  community: "Community",
  tool: "Tool",
  library: "Library",
};

export function Contributions() {
  if (contributions.length === 0) {
    return (
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <GitMerge className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Contributions</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Open Source & Contributions
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              My open source work and community contributions will appear here. Check back soon!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <GitMerge className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Contributions</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Open Source & Contributions
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Projects and tools I&apos;ve contributed to or open-sourced for the community
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contributions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="flex h-full flex-col overflow-hidden border-2 pt-0 transition-all hover:border-primary">
                {item.image && (
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="object-cover object-top transition-transform hover:scale-105"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 3}
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="mb-1 flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {typeLabel[item.type] ?? item.type}
                    </Badge>
                    {item.stars !== undefined && (
                      <span className="text-xs text-muted-foreground">⭐ {item.stars}</span>
                    )}
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {item.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {item.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{item.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                  {item.contributions && item.contributions.length > 0 && (
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {item.contributions.slice(0, 3).map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
                <CardFooter className="flex gap-2">
                  {item.github && (
                    <Button asChild variant="outline" size="sm">
                      <a href={item.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                  )}
                  {item.liveUrl && (
                    <Button asChild variant="ghost" size="sm">
                      <a href={item.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
