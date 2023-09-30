import { getLastYoutubeUpload } from '@/utils/get-last-youtube-upload'
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
  const lastYoutubeVideo = await getLastYoutubeUpload()

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={lastYoutubeVideo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-cyan-50 px-4 py-1 text-xs font-medium text-zinc-800 transition-colors lg:text-sm"
          >
            <SparklesIcon className="h-4 w-4 text-primary" />
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
            <YoutubeIcon className="h-4 w-4" />
            <p className="text-sm font-medium">{lastYoutubeVideo.title}</p>
          </Link>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
