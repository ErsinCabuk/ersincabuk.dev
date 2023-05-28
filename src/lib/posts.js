import matter from "gray-matter"
import { readFileSync, readdirSync } from "fs";

function getAllPosts() {
  return readdirSync("C:/Users/Ersin/ersincabuk.dev/src/posts").map(fileName => {
    let matterResult = matter(readFileSync(`C:/Users/Ersin/ersincabuk.dev/src/posts/${fileName}`))
    return { 
      title: matterResult.data.title, 
      date: matterResult.data.date, 
      subtitle: matterResult.data.subtitle, 
      tags: matterResult.data.tags,
      slug: fileName.replace(".mdx", "")
    }
  })
}

function getPost(post) {
  return matter(readFileSync(`C:/Users/Ersin/ersincabuk.dev/src/posts/${post}.mdx`, "utf-8"))
}

export { getAllPosts, getPost }