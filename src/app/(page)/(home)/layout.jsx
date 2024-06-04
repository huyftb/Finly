import { Inter } from 'next/font/google'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function HomepageLayout({ children }) {

  return (
    <html lang="en">
      <body className="flex min-h-full flex-col">{children} </body>
    </html>
  )
}
