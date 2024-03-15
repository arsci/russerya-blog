import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import MessageBubble from '@/components/MessageBubble'
import Footer from '../../components/FooterBlog'
import { Analytics } from '../../components/Analytics'
import { ThemeProvider } from "../../components/ThemeProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan Russell',
  description: 'Ryan Russell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={`${inter.className} bg-slate-100 dark:bg-gray-800`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <MessageBubble />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        </body>
      </html>
  )
}