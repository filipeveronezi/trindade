import { buttonVariants } from '@/components/ui/button'
import { YoutubeVideoCard } from '@/components/youtube-video-card'
import { getLastYoutubeUploads } from '@/utils/get-last-youtube-upload'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { twMerge } from 'tailwind-merge'

export default async function Sermons() {
  const videos = await getLastYoutubeUploads(12)

  return (
    <main className="relative mx-auto flex min-h-screen max-w-screen-2xl flex-col items-center overflow-y-hidden px-4 py-20">
      <h1 className="mt-6 text-center text-xl font-extrabold tracking-tight lg:text-3xl">
        <Balancer>Aulas e Sermões</Balancer>
      </h1>
      <div className="grid max-w-screen-lg grid-cols-1 flex-wrap items-stretch gap-4 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <YoutubeVideoCard video={video} key={video.title} />
        ))}
      </div>
      <Link
        href="https://maps.app.goo.gl/mXB2g3v6bvJuB1fW6"
        target="_blank"
        rel="noopener noreferrer"
        className={twMerge(
          buttonVariants({ variant: 'secondary' }),
          'flex items-center justify-center gap-2'
        )}
      >
        Ver mais
        <ArrowTopRightOnSquareIcon className="h-4 w-4" />
      </Link>
    </main>
  )
}
