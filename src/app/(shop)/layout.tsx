import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Analytics } from '../../components/VercelAnalytics'
import { ThemeProvider } from "../../components/ThemeProvider";
import GoogleAnalytics  from "../../components/GoogleAnalytics"

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
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        </body>
      </html>
  )
}