"use client"
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      {/* <ul role="list" className="space-y-3">
        <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          <b>Van Build</b>
        </li>
        <li className="overflow-hidden bg-white px-4 py-4 shadow sm:rounded-md sm:px-6">
          <b>Tech</b>
        </li>
      </ul> */}
      <Footer />
    </main>
  )
}
