import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between">
      <Link className="text-red-500 font-semibold text-2xl" href=''>ST PIZZA</Link>

      <nav className="flex items-center gap-8">
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link href={''} className="bg-red-600
        rounded-full text-white px-8 py-2">Login</Link>
      </nav>
    </header>
    </div>
  )
}

export default Header
