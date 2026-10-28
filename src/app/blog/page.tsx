import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Writing",
};

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="page-head" aria-labelledby="blog-title">
        <div className="container head">
          <h1 id="blog-title">Writing.</h1>
          <p className="lead">
            Notes on platforms, integrations and automation, newest first.
          </p>
        </div>
      </section>

      <div className="container">
        <ol className="index">
          {posts.map((post, i) => (
            <li
              key={post.slug}
              className={`index__row${i === 0 ? " index__row--lead" : ""}`}
            >
              <div className="index__name">
                <h2 className="index__title">
                  <Link href={`/blog/${post.slug}`} className="index__link">
                    {post.title}
                  </Link>
                </h2>
              </div>
              <p className="index__desc">{post.excerpt}</p>
              <time className="index__year" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
