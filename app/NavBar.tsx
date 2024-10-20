'use client'
import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'
const NavBar = () => {
    const links = [
        {name: "Dashboard", href: "/"},
        {name: "Issues", href: "/issues"}
    ]
    let currentPath = usePathname()

  return (
    <nav className='flex space-x-4 border-b h-14 items-center mb-5 px-5'>
        <Link href="/">
            <AiFillBug />
        </Link>
        <ul className='flex space-x-4'>
            {links.map(link => <Link key={link.href} className={classnames({
                'text-zinc-900': link.href === currentPath,
                'text-zinc-400': link.href !== currentPath,
                'transition-colors': true
            })} href={link.href}>{link.name}</Link>)}
        </ul>
    </nav>
  )
}

export default NavBar