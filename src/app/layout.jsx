import { Inter } from 'next/font/google'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Finly - Modern Financial Management Platform',
  description:
    'Finly is a modern financial management platform for businesses. Manage your expenses, invoices, and payments in one place.',
}

export default function RootLayout({ children }) {
  return (
      <body>
        <main>{children}</main>
      </body>

  )
}
