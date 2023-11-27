import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar'
import AudioControl from '@/components/control'
import { AudioProvider } from '@/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Generated by Neeraj Parmar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AudioProvider>
          <main className="flex h-screen flex-col overflow-hidden">
            <h1 className="absolute text-center w-full invisible -top-96">Spotify Audio Player Clone</h1>
            {/* desktop view  */}
            <div className="w-full h-full hidden sm:flex flex-col">
              <div className="w-full flex-1 flex overflow-y-auto">
                {/* menu options (nav) */}
                <div>
                  <Sidebar />
                </div>
                {children}
              </div>
              {/* control box(audio controller) */}
              <AudioControl />
            </div>

            {/* mobile view */}
            <div className="w-full h-full flex sm:hidden">
              mobile
            </div>
          </main>
        </AudioProvider>
      </body>
    </html>
  )
}
