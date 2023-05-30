"use client";

import { createPost } from "@/lib/posts";
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"

export default function BlogNewPostPage() {
  const {data: session} = useSession()

  // ERROR
  function handleSubmit(e) {
  //   e.preventDefault()
  //   const formData = new FormData(e.target),
  //         slug = formData.get("slug"),
  //         content = formData.get("content")
  //   createPost(slug, content)
  //   e.target.reset()
  }

  if(!session || session.user.email != "ersincabuk13@gmail.com") return (
    <>
      <button onClick={() => signIn("github")}>Sign In</button>
    </>
  )
  else return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-2 mb-2 border-2 border-neutral-700 bg-neutral-800 rounded-xl p-4 h-min">
        <div className="flex gap-x-2">
          <label htmlFor="slug"><h3>Slug:</h3></label>
          <input name="slug" className="w-full border-2 border-neutral-700 bg-neutral-800 rounded-xl p-1"></input>
        </div>
        <div className="flex gap-x-2">
          <label htmlFor="content"><h3>Content:</h3></label>
          <textarea name="content" rows="20" className="w-full border-2 border-neutral-700 bg-neutral-800 rounded-xl p-4"></textarea>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <Link href="/blog" className="flex items-center justify-center border-2 rounded-xl p-4 border-red-800 bg-red-900 hover:bg-red-800">
          Cancel
        </Link>
        <button type="submit" className="flex items-center justify-center border-2 rounded-xl p-4 border-green-800 bg-green-900 hover:bg-green-800">
          Save
        </button>
      </div>
      </form>
    </>
  )
}