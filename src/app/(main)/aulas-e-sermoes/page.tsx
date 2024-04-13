import { buttonVariants } from '@/components/ui/button'
import { YoutubeVideoCard } from '@/components/youtube-video-card'
import { getLastYoutubeUploads } from '@/utils/get-last-youtube-upload'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

export default async function Sermons() {
  const videos = await getLastYoutubeUploads(12)

  return (
    <main className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center overflow-y-hidden px-4 py-20">
      <h1 className="mt-6 text-balance text-center text-xl font-extrabold tracking-tight lg:text-3xl">
        Aulas e Sermões
      </h1>
      <div className="flex w-full max-w-screen-md flex-col flex-wrap items-stretch gap-2 py-10">
        {videos.map((video) => (
          <YoutubeVideoCard video={video} key={video.title} />
        ))}
      </div>
      <Link
        href="https://www.youtube.com/playlist?list=PLOEl-C-n9oJ7Wey3vgHWIjM9sIP9lY1Ta"
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(
          buttonVariants({ variant: 'secondary' }),
          'flex items-center justify-center gap-2'
        )}
      >
        Ver mais
      </Link>
    </main>
  )
}
