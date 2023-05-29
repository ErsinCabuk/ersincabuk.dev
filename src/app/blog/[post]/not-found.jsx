import Link from "next/link"
export default function NotFound() {
  return (
    <>
      <center>
        <Link href="/"><div className="flex gap-1 items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-xl p-2 hover:bg-neutral-700">
          Return to Home
        </div></Link>
      </center>
    </>
  )
};