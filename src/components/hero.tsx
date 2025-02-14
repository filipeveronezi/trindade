import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { LastYoutubeVideoLink } from './last-youtube-video-link'
import { buttonVariants } from './ui/button'

export function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 pb-16 pt-20 lg:pt-28">
      <div className="flex cursor-default flex-col items-center leading-snug">
        <LastYoutubeVideoLink />
        <div className="flex w-full items-center justify-center bg-gradient-to-tr from-zinc-900 via-neutral-700 to-zinc-300 bg-clip-text px-8 font-extrabold text-transparent">
          <span className="py-2 font-serif text-xl font-medium lg:text-4xl">
            Igreja Batista da
          </span>
        </div>
        <span className="bg-gradient-to-tr from-zinc-900 via-neutral-800 to-zinc-400 bg-clip-text font-serif text-6xl leading-none text-transparent md:text-9xl lg:text-9xl">
          Trindade
        </span>
      </div>
      <h1 className="mt-6 text-balance text-center text-xl font-extrabold tracking-tight lg:text-3xl">
        Uma comunidade de fé
      </h1>
      <p className="max-w-md text-balance text-center text-sm font-medium text-zinc-600 lg:text-base">
        Somos uma igreja batista reformada. Adoramos a Deus de forma simples,
        com música, oração e exposição bíblica.
      </p>
      <div className="flex flex-col gap-2">
        <p className="max-w-md text-center text-sm font-medium text-zinc-600 lg:text-base">
          EBD — Domingo, 09:20
        </p>
        <p className="max-w-md text-center text-sm font-medium text-zinc-600 lg:text-base">
          Culto — Domingo, 10:30
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
        <Link
          href="https://maps.app.goo.gl/mXB2g3v6bvJuB1fW6"
          target="_blank"
          rel="noopener noreferrer"
          className={twMerge(
            buttonVariants({ variant: 'default' }),
            'flex items-center justify-center gap-1'
          )}
        >
          Venha nos visitar
          <ArrowLongRightIcon className="size-5" />
        </Link>
      </div>
    </section>
  )
}
