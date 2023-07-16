import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Massively Landing Page',
  description: 'Created by neeraj parmar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
