"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    
  return (
    <div>
      <header className="flex items-center justify-between">
      <Link className="text-red-500 font-semibold text-2xl" href={'/'}>ST PIZZA</Link>

      <nav className="flex items-center gap-8">
        <Link href={'/'}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        
      </nav>
      <nav className="flex items-center gap-4 text-gray-500
      font-semibold">

        <Link href={'/login'}>Login</Link>
      <Link href={'/register'} className="bg-red-600
        rounded-full text-white px-8 py-2">Register</Link>
      </nav>
    </header>
    </div>
  )
}

export default Header
