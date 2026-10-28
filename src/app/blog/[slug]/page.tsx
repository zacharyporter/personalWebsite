import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  return { title: post?.title ?? "Writing", description: post?.excerpt };
}

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) notFound();

  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);

  return (
    <article className="container post">
      <header className="post__head">
        <Link href="/blog" className="link index__where">
          All writing
        </Link>
        <h1 className="display-s">{post.title}</h1>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </header>
      <div className="prose post__body">
        <Post />
      </div>
    </article>
  );
}
