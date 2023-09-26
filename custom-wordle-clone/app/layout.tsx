import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { AppProvider } from '@/context';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Custom Wordle Clone',
  description: 'Created by neeraj parmar',
}

export default function RootLayout({
  children,
  rules,
  result,
  user,
  custom_word,
}: {
  children: React.ReactNode,
  rules: React.ReactNode,
  result: React.ReactNode,
  user: React.ReactNode,
  custom_word: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <AppProvider>
          {children}
          {/* rules modal  */}
          {rules}
          {/* result modal  */}
          {result}
          {/* user modal  */}
          {user}
          {/* add custom word modal  */}
          {custom_word}
        </AppProvider>
      </body>
    </html>
  )
}
