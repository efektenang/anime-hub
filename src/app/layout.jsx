import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/utilities/Navbar'
import Footer from '@/components/utilities/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anime Hub App',
  description: 'Website streaming nonton anime gratis!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
