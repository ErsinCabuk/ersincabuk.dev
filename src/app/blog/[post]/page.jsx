import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

export const generateStaticParams = async() => {
  return [{ post: "post1" }]
}

export default function BlogPostPage(props) {
  let post = matter(fs.readFileSync(`C:/Users/Ersin/ersincabuk.dev/src/posts/${props.params.post}.mdx`, "utf-8"))
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
