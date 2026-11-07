import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Neeraj Parmar | Node.js Developer & Backend Engineer',
  description: 'Portfolio of Neeraj Parmar - Backend-focused Node.js Developer with 3.5+ years of experience in distributed systems, RESTful APIs, Web3, and database architectures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="darkTheme">
      <body className={`${inter.className} min-h-screen bg-base-100 text-base-content antialiased flex flex-col justify-between selection:bg-primary/20 selection:text-primary`}>
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <footer className="border-t border-base-200 py-6 text-center text-xs text-base-content/50">
          <p>© {new Date().getFullYear()} Neeraj Parmar. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
