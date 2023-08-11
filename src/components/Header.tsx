'use client'
import * as Nav from './Navigation'
import { ThemeSwitcher } from './DarkMode'
import { Disclosure } from '@headlessui/react'

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white dark:bg-gray-700">
     {({ open }) => (
       <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex pt-1">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img
                      className="inline-block h-10 w-10 rounded-full"
                      src="../favicon.ico"
                      alt=""
                    />
                  </a>
                  <nav className="flex -mb-6 sm:ml-6 columns-2 sm:flex sm:justify-center sm:space-x-8" aria-label="Header">
                    {Nav.navigation.map((item) => (
                      <div key={item.name} className="pb-6">
                        <a href={item.href} className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="flex justify-end md:flex-1 pt-3">
                <div className="pointer-events-auto">
                  <ThemeSwitcher />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}