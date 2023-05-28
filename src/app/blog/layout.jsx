export default function BlogLayout({ children }) {
  return (
    <>
      <header className='flex items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-2xl p-4 mb-2'>
        <h2>Blog</h2>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}