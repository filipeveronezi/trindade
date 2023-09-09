import { ArrowLongRightIcon, SparklesIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Balancer } from 'react-wrap-balancer'
import { twMerge } from 'tailwind-merge'
import { buttonVariants } from './ui/button'

export function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 pb-16 pt-20 lg:pt-32">
      <div className="flex cursor-default flex-col items-center leading-snug">
        <Link
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-cyan-50 px-4 py-1 text-xs font-medium text-zinc-800 transition-colors lg:text-sm"
        >
          <SparklesIcon className="h-4 w-4 text-primary" />
          Assistir ao sermão mais recente
        </Link>
        <div className="flex w-full items-center justify-center bg-gradient-to-tr from-zinc-900 via-neutral-700 to-zinc-300 bg-clip-text px-8 font-extrabold text-transparent">
          <span className="font-serif text-xl font-medium lg:text-4xl">
            Igreja Batista da
          </span>
        </div>
        <span className="bg-gradient-to-tr from-zinc-900 via-neutral-800 to-zinc-400 bg-clip-text font-serif text-6xl leading-none text-transparent md:text-9xl lg:text-9xl">
          Trindade
        </span>
      </div>
      <h1 className="mt-6 text-center text-xl font-extrabold tracking-tight lg:text-3xl">
        <Balancer>Uma comunidade de fé</Balancer>
      </h1>
      <p className="max-w-md text-center text-sm font-medium text-zinc-600 lg:text-base">
        <Balancer>
          Adoramos a Deus de forma simples, com música, oração e exposição
          bíblica.
        </Balancer>
      </p>
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Link
          href="#"
          className={twMerge(
            buttonVariants({ variant: 'default' }),
            'flex items-center justify-center gap-1'
          )}
        >
          Venha nos visitar
          <ArrowLongRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
