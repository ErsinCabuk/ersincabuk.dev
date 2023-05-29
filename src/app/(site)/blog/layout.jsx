"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { SessionProvider } from "next-auth/react"

export default function BlogLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <SessionProvider>
        <header className="grid grid-cols-3 items-center border-2 border-neutral-700 bg-neutral-800 rounded-2xl p-4 mb-2">
          <button onClick={() => router.back()} className="flex gap-1 items-center justify-start text-lg">
            <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/back-icon.png?raw=true" alt="Back" width={25} height={25}></Image>
            Back
          </button>
          <h2 className="text-center">Blog</h2>
          <button onClick={() => router.forward()} className="flex gap-1 items-center justify-end text-lg">
            Forward
            <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/forward-icon.png?raw=true" alt="Forward" width={25} height={25}></Image>
          </button>
        </header>
        <main>
          {children}
        </main>
      </SessionProvider>
    </>
  )
}