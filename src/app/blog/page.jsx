import fs from "fs";
import matter from "gray-matter";
import Link from "next/link"

export default function BlogPage() {
  const posts = fs.readdirSync("C:/Users/Ersin/ersincabuk.dev/src/posts").map(fileName => {
    let matterResult = matter(fs.readFileSync(`C:/Users/Ersin/ersincabuk.dev/src/posts/${fileName}`))
    return { 
      title: matterResult.data.title, 
      date: matterResult.data.date, 
      subtitle: matterResult.data.subtitle, 
      tags: matterResult.data.tags,
      slug: fileName.replace(".mdx", "")
    }
  })
  return (
    <>
      <main>
        <header className='flex items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-2xl p-4 mb-2'>
          <h2>Blog</h2>
        </header>
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
      </main>
    </>
  )
};