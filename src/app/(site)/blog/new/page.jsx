"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function BlogNewPostPage() {
  const { data: session } = useSession()

  if(!session || session.user.email != "ersincabuk13@gmail.com") return (
    <>
      <button onClick={() => signIn("github")}>Sign In</button>
    </>
  )
  else return (
    <>
      <p>{JSON.stringify(session)}</p>
      <button onClick={() => signOut()}></button>
    </>
  )
}