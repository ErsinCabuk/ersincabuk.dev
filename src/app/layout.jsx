import '../../public/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

/*const inter = Inter({ subsets: ['latin'] })*/

export const metadata = {
  title: 'Ersin Çabuk'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-neutral-900 mx-32 my-4 text-neutral-200'>{/*${inter.className}*/}
        <header className='flex items-center justify-center border-2 border-neutral-700 bg-neutral-800 rounded-2xl p-8 mb-2'>
          <h1>Ersin Çabuk</h1>
        </header>
        {children}
      </body>
    </html>
  )
}