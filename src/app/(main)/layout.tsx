import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif-display'
})

export const metadata: Metadata = {
  title: 'Igreja Batista da Trindade',
  description:
    'Adoramos a Deus de forma simples, com música, oração e exposição bíblica.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={clsx(
          'font-sans text-zinc-900 antialiased',
          inter.variable,
          dmSerifDisplay.variable
        )}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}
