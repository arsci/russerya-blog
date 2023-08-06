"use client"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Footer />
      <Analytics />
    </main>
  )
}
