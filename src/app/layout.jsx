import "../../public/globals.css"

export const metadata = {
  title: "Ersin Çabuk"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 mx-32 my-4 text-neutral-200">
        {children}
      </body>
    </html>
  )
}