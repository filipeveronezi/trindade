'use client'

import { Bars2Icon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { Logo } from './logo'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { cn } from '@/lib/utils'

const navItems = [
  {
    label: 'Início',
    href: '/'
  },
  {
    label: 'Sermões',
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
    <header className="fixed inset-x-0 bottom-0 z-50 mx-auto flex items-center justify-center bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent py-4 lg:bottom-auto lg:top-0 lg:bg-gradient-to-b">
      <nav className="flex h-10 w-max items-center justify-center rounded-2xl border bg-white/90 px-4 py-6 backdrop-blur-sm">
        <ul className="flex w-max flex-row gap-4">
          {navItems.map((navItem) => (
            <li key={navItem.href}>
              <Link
                href={navItem.href}
                className={cn(
                  'flex h-8 flex-row rounded-full px-4 font-medium transition-colors hover:cursor-pointer',
                  pathname === navItem.href
                    ? 'text-zinc-800'
                    : 'text-zinc-500 hover:text-zinc-800'
                )}
              >
                <span className="flex flex-row items-center">
                  {navItem.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
