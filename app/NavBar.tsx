import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai'

const NavBar = () => {
    const links = [
        {name: "Dashboard", href: "/"},
        {name: "Issues", href: "/issues"}
    ]


  return (
    <nav className='flex space-x-4 border-b h-14 items-center mb-5 px-5'>
        <Link href="/">
            <AiFillBug />
        </Link>
        <ul className='flex space-x-4'>
            {links.map(link => <Link key={link.href} className='text-zinc-400 hover:text-zinc-900 transition-colors' href={link.href}>{link.name}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar