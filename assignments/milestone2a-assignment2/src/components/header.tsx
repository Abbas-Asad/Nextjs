import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 shadow-lg">
      <nav className="flex justify-center bg-gray-900 text-gray-200 py-4 font-sans">
        <ul className="flex gap-7 text-lg">
          <li><Link href="/" className="hover:text-teal-400 transition-all ease-in">Home</Link></li>
          <li><Link href="/services" className="hover:text-teal-400 transition-all ease-in">Services</Link></li>
          <li><Link href="/about" className="hover:text-teal-400 transition-all ease-in">About</Link></li>
          <li><Link href="/contact" className="hover:text-teal-400 transition-all ease-in">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
