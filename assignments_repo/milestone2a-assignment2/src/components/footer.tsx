import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-gray-300 text-center py-3 font-sans text-lg shadow-lg">
      <p>&copy; 2024 <Link href='https://github.com/abbas-asad'>Abbas Asad Dev</Link></p>
    </footer>
  )
}

export default Footer
