'use client'
import * as Socials from './LinksAndIcons'
import { NewsletterMain } from './Newsletter'
  
export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-gray-800 mt-auto">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t lines" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm text-gray-500" />
        </div>
      </div>
      <NewsletterMain />
      <div className="w-full border-t lines mt-10" />
      <div className="mt-10 flex justify-center space-x-10">
        {Socials.footer.map((item) => (
          <a key={item.name} href={item.href} target={item.target} className="text-gray-500 dark:text-gray-300">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <p className="mt-10 mb-10 text-center text-xs leading-5 text-gray-500 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Ryan Russell. All rights reserved.
      </p>
    </footer>
  )
}