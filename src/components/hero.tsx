import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { LastYoutubeVideoLink } from './last-youtube-video-link'
import { buttonVariants } from './ui/button'
import { MapIcon, MapPinnedIcon } from 'lucide-react'

export function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 pb-16 pt-8 lg:pt-28">
      <div className="flex cursor-default flex-col items-center leading-snug">
        <LastYoutubeVideoLink />
        <div className="flex w-full items-center justify-center bg-gradient-to-tr from-zinc-900 via-neutral-700 to-zinc-300 bg-clip-text px-8 font-extrabold text-transparent">
          <span className="py-2 font-serif text-2xl font-medium lg:text-5xl">
            Igreja Batista da
          </span>
        </div>
        <span className="bg-gradient-to-tr from-zinc-900 via-neutral-800 to-zinc-400 bg-clip-text font-serif text-7xl leading-none text-transparent md:text-9xl lg:text-9xl">
          Trindade
        </span>
      </div>
      <h1 className="mt-6 text-balance text-center text-xl font-extrabold tracking-tight lg:text-3xl">
        Uma comunidade de fé
      </h1>
      <p className="max-w-md text-balance text-center font-medium text-zinc-600">
        Somos uma igreja batista reformada. Adoramos a Deus de forma simples,
        com música, oração e exposição bíblica.
      </p>
      <div className="flex flex-col gap-2">
        <p className="max-w-md text-center font-medium text-zinc-600">
          EBD — Domingo, 09:20
        </p>
        <p className="max-w-md text-center font-medium text-zinc-600">
          Culto — Domingo, 10:30
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center lg:flex-row">
        <Link
          href="https://maps.app.goo.gl/mXB2g3v6bvJuB1fW6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-4 rounded-2xl bg-gradient-to-b from-primary/70 via-primary/90 to-primary/70 py-3 pl-6 pr-3 text-lg font-medium text-white shadow-2xl active:scale-[0.98]"
        >
          Venha nos visitar
          <div className="size-10 rounded-xl bg-primary p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
    </section>
  )
}
