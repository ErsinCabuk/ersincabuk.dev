import fs from "fs";
import matter from "gray-matter"

function getAllPosts() {
  return fs.readdirSync("C:/Users/Ersin/ersincabuk.dev/src/posts").map(fileName => {
    let matterResult = matter(fs.readFileSync(`C:/Users/Ersin/ersincabuk.dev/src/posts/${fileName}`))
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
  return matter(fs.readFileSync(`C:/Users/Ersin/ersincabuk.dev/src/posts/${post}.mdx`, "utf-8"))
}


function createPost(slug, content) {
  return fs.writeFileSync(`C:/Users/Ersin/ersincabuk.dev/src/posts/${slug}`, content)
}

export { getAllPosts, getPost, createPost }