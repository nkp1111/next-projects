"use client";

import './globals.css'
import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Notifications } from "@mantine/notifications";


export const metadata: Metadata = {
  title: 'Student TimeTable',
  description: 'Created by nkp1111',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Notifications position="top-center" />
        {children}
      </body>
    </html>
  )
}
