import Navbar from '@/components/navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import SessionProvider from '@/components/sessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flow_mazon',
  description: 'You will be happy with your purchase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={inter.className}>
          <Navbar />
          <main className='p-3 max-w-7xl min-w-[300px] m-auto'>
            {children}
          </main>
          <Footer />
        </body>
      </SessionProvider>
    </html>
  )
}
