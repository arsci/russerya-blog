import { Fragment, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as Nav from './Navigation'

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="../favicon.ico"
                  />
                  <nav className="flex -mb-6 sm:ml-6 columns-2 sm:flex sm:justify-center sm:space-x-8" aria-label="Header">
                    {Nav.navigation.map((item) => (
                      <div key={item.name} className="pb-6">
                        <a href={item.href} className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                          {item.name}
                        </a>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
