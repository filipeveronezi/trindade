'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import { buttonVariants } from './ui/button'

export function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 py-20 lg:py-36">
      <div className="flex cursor-default flex-col items-center leading-snug">
        <div className="flex w-full items-center justify-center px-8 font-extrabold">
          <motion.span
            initial={{ opacity: 0, y: '5px' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-serif font-medium lg:text-4xl"
          >
            Igreja Batista da
          </motion.span>
        </div>
        <motion.span
          initial={{ opacity: 0, y: '5px' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="bg-gradient-to-tr from-black via-zinc-950 to-zinc-400 bg-clip-text font-serif text-6xl leading-none text-transparent md:text-9xl lg:text-9xl"
        >
          Trindade
        </motion.span>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: '5px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        className="mt-20 bg-gradient-to-tr from-black via-zinc-950 to-zinc-600 bg-clip-text text-center text-xl font-extrabold tracking-tight text-transparent lg:text-3xl"
      >
        <Balancer>Uma comunidade de fé</Balancer>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: '5px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.9 }}
        className="text-center text-sm font-medium text-zinc-600 lg:text-base"
      >
        <Balancer>
          Adoramos a Deus de forma simples, com música, oração e exposição
          bíblica.
        </Balancer>
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: '5px' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.9 }}
        className="flex flex-col items-center justify-center gap-4 lg:flex-row"
      >
        <Link href="#" className={buttonVariants({ variant: 'secondary' })}>
          Entre em contato
        </Link>
        <Link href="#" className={buttonVariants({ variant: 'default' })}>
          Venha nos visitar
        </Link>
      </motion.div>
    </section>
  )
}
