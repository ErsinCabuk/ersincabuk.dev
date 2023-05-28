import { getAllPosts } from "@/lib/posts.js";
import Link from "next/link"

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="flex flex-col justify-between gap-1 border-2 border-neutral-700 bg-neutral-800 rounded-xl p-4 hover:bg-neutral-700">
              <h4>{post.title}</h4>
              <p>{post.subtitle}</p>
              <p className="text-right">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
};