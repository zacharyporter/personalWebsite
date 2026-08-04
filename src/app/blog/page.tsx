import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <div className="flex flex-col gap-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-1"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium group-hover:underline">
                {post.title}
              </h2>
              <time className="shrink-0 text-sm text-zinc-500">
                {post.date}
              </time>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
