import { getLastYoutubeUploads } from '@/utils/get-last-youtube-upload'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'
import { YoutubeIcon } from './youtube-icon'

export async function LastYoutubeVideoLink() {
  const [lastYoutubeVideo] = await getLastYoutubeUploads(1)

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={lastYoutubeVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 flex cursor-pointer items-center justify-center gap-2 rounded-full border bg-white px-3 py-2 text-xs font-medium text-zinc-800 transition-colors lg:text-sm"
          >
            <SparklesIcon className="size-4 text-primary" />
            Assistir ao sermão mais recente
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <Link
            href={lastYoutubeVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <YoutubeIcon className="size-4" />
            <p className="text-sm font-medium">{lastYoutubeVideo.title}</p>
          </Link>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
