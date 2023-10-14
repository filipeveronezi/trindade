import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { YoutubeIcon } from './youtube-icon'

interface YoutubeVideoCardProps {
  video: {
    title: string
    url: string
    description: string
  }
}

export function YoutubeVideoCard({ video }: YoutubeVideoCardProps) {
  return (
    <Link
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full max-w-[22.5rem] flex-col justify-between gap-2 overflow-hidden rounded-md border border-zinc-200 px-5 py-3 transition-colors hover:border-zinc-400 hover:bg-zinc-100 sm:max-w-[15rem]"
    >
      <ArrowTopRightOnSquareIcon className="absolute right-3 top-3 h-4 w-4 -translate-y-8 text-zinc-600 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
      <div>
        <YoutubeIcon className="h-7 w-7" />
      </div>
      <span className="line-clamp-2 text-sm font-bold">{video.title}</span>
    </Link>
  )
}
