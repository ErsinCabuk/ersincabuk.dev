"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { SessionProvider } from "next-auth/react"

export default function BlogLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <SessionProvider>
        <header className="flex gap-x-2 mb-2">
          <button onClick={() => router.back()} className="flex gap-x-2 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-2xl p-4 hover:bg-neutral-700">
            <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/back-icon.png?raw=true" alt="Back" width={15} height={15}></Image>
            Back
          </button>
          <h2 className="text-center border-2 border-neutral-700 bg-neutral-800 rounded-2xl p-4 w-full">Blog</h2>
          <button onClick={() => router.forward()} className="flex gap-x-2 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-2xl p-4 hover:bg-neutral-700">
            Forward
            <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/forward-icon.png?raw=true" alt="Forward" width={15} height={15}></Image>
          </button>
        </header>
        <main>
          {children}
        </main>
      </SessionProvider>
    </>
  )
}