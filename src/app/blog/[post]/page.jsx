import { getAllPosts, getPost } from "@/lib/posts.js";
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'
import { notFound } from "next/navigation";

export function generateMetadata(props) {
  return { title: getPost(props.params.post).data.title }
}

export default function BlogPostPage(props) {
  if(!getAllPosts().find(post => post.slug == props.params.post)) notFound()
  let post = getPost(props.params.post)
  return (
    <>
      <main>
        <article className='mx-auto mt-8 prose prose-invert prose-2xl'>
          <h2>{post.data.title}</h2>
          <p>{post.data.date}</p>
          <Markdown>{post.content}</Markdown>
        </article>
      </main>
    </>
  )
}
