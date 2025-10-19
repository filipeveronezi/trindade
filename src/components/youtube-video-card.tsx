import Link from 'next/link'

interface YoutubeVideoCardProps {
  video: {
    title: string
    url: string
    description: string
    publishedAt: string
  }
}

export function YoutubeVideoCard({ video }: YoutubeVideoCardProps) {
  const publishedAt = new Date(video.publishedAt).toLocaleDateString('pt-BR')

  return (
    <Link
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full flex-col gap-1 overflow-hidden rounded-lg p-3 transition-colors hover:border-zinc-300 hover:bg-white"
    >
      <span className="text-xs text-zinc-500">{publishedAt}</span>
      <span className="line-clamp-3 text-balance text-sm font-medium">
        {video.title}
      </span>
    </Link>
  )
}
