'use client'

import { Bars2Icon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { Logo } from './logo'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const navItems = [
  {
    label: 'Início',
    href: '/'
  },
  {
    label: 'Aulas e sermões',
    href: '/aulas-e-sermoes'
  },
  {
    label: 'Contato',
    href: '/contato'
  }
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto flex w-[90%] max-w-3xl items-center justify-between">
      <Link href="/">
        <Logo className="h-10 w-10" />
      </Link>
      {/* Desktop only */}
      <nav className="hidden h-10 w-max items-center justify-center rounded-full border bg-white/60 px-1 backdrop-blur-sm lg:flex">
        <ul className="flex w-max flex-row gap-4">
          {navItems.map((navItem) => (
            <li
              key={navItem.href}
              className={twMerge(
                clsx(
                  'relative flex h-8 flex-row rounded-full px-4 font-medium transition-colors hover:cursor-pointer',
                  pathname === navItem.href && 'text-white'
                )
              )}
            >
              {pathname === navItem.href && (
                <motion.div
                  layoutId="navItemBackground"
                  className="absolute left-0 top-0 -z-10 h-full w-full rounded-full bg-primary"
                />
              )}
              <Link href={navItem.href} className="flex flex-row items-center">
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Only on mobile */}
      <Popover>
        <PopoverTrigger className="lg:invisible">
          <Bars2Icon className="h-6 w-6 text-zinc-700" />
        </PopoverTrigger>
        <PopoverContent align="end">
          <nav>
            <ul className="flex flex-col gap-2">
              {navItems.map((navItem) => (
                <li key={navItem.href} className="flex flex-row">
                  <Link
                    href={navItem.href}
                    className="flex flex-row items-center"
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </PopoverContent>
      </Popover>
    </header>
  )
}
