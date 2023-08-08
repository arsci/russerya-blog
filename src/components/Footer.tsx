import * as Nav from './Navigation'
import * as Socials from './SocialsAndIcons'
import ModeToggle from './DarkMode'
  
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {Nav.navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {Socials.socials.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-500 dark:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Ryan Russell. All rights reserved.
        </p>
      </div>
    </footer>
  )
}