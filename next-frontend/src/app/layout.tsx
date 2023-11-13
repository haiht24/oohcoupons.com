import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import GoogleTag from '@/components/GoogleTag'

const inter = Inter({ subsets: ['latin'] })

// Default metadata
export const metadata: Metadata = {
  title: '',
  description: '',
  icons:{
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <GoogleTag />

      <body className={inter.className}>{children}</body>
    </html>
  )
}
