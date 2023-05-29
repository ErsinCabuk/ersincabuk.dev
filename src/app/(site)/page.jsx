"use client";

import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  return (
    <>
      <header className="grid grid-cols-3 items-center border-2 border-neutral-700 bg-neutral-800 rounded-2xl p-4 mb-2">
        <button onClick={() => router.back()} className="text-left">Back</button>
        <h2 className="text-center">Ersin Çabuk</h2>
        <button onClick={() => router.forward()} className="text-right">Forward</button>
      </header>
      <main>
        <div className="flex items-center-justify-between gap-x-2 min-h-min">
          <div className="flex flex-col gap-y-1 min-w-max">
            <a href="https://github.com/ErsinCabuk" target="_blank"><div className="flex gap-1 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/github-icon.png?raw=true" alt="GitHub" width={20} height={20}></Image>
              GitHub
            </div></a>
            <a href="https://twitter.com/ErsinCabk" target="_blank"><div className="flex gap-1 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/twitter-icon.png?raw=true" alt="GitHub" width={20} height={20}></Image>
              Twitter
            </div></a>
            <a href="https://instagram.com/ersincabk" target="_blank"><div className="flex gap-1 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/instagram-icon.png?raw=true" alt="GitHub" width={20} height={20}></Image>
              Instagram
            </div></a>
            <Link href="blog"><div className="flex gap-1 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/blog-icon.png?raw=true" alt="GitHub" width={20} height={20}></Image>
              Blog
            </div></Link>
          </div>
          
          <div className="flex flex-col gap-y-1 min-w-max">
            <a href="https://github.com/ErsinCabuk" target="_blank"><div className="flex gap-1 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/javascript-icon.png?raw=true" alt="GitHub" width={20} height={20}></Image>
              JavaScript
            </div></a>
            <a href="https://react.dev/" target="_blank"><div className="flex gap-1 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/reactjs-icon.png?raw=true" alt="GitHub" width={20} height={20}></Image>
              React.js
            </div></a>
            <a href="https://nextjs.org/" target="_blank"><div className="flex gap-1 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/nextjs-icon.png?raw=true" alt="GitHub" width={20} height={20}></Image>
              Next.js
            </div></a>
            <a href="https://tailwindcss.com/" target="_blank"><div className="flex gap-1 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://github.com/ErsinCabuk/ersincabuk.dev/blob/main/public/tailwindcss-icon.png?raw=true" alt="GitHub" width={20} height={20}></Image>
              TailwindCSS
            </div></a>
          </div>

          <div className="flex flex-col gap-y-1 min-w-max">
            <a href="https://gameith.net" target="_blank"><div className="flex gap-2 items-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://cdn.pixabay.com/photo/2012/04/24/12/29/no-symbol-39767_640.png" alt="GitHub" width={20} height={20}></Image>
              <div className="flex flex-col">
                <p className="font-bold">Gameith</p>
                <p>A platform for gamers</p>
              </div>
            </div></a>
            <a href="/" target="_blank"><div className="flex gap-2 items-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
              <Image src="https://cdn.pixabay.com/photo/2012/04/24/12/29/no-symbol-39767_640.png" alt="GitHub" width={20} height={20}></Image>
              <div className="flex flex-col">
                <p className="font-bold">Nothing else</p>
              </div>
            </div></a>
          </div>

          <div className="flex border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 min-w-min">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, similique perspiciatis deleniti eaque illo tempora culpa officia impedit consequatur modi porro maiores nam quod beatae voluptatum in quasi aliquam sit?</p>
          </div>          
        </div>
      </main>
    </>
  )
}