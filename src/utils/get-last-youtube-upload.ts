const YOUTUBE_PLAYLIST_ID = process.env.YOUTUBE_PLAYLIST_ID
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY

interface ResourceId {
  kind: string
  videoId: string
}

interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  resourceId: ResourceId
}

interface Item {
  kind: string
  etag: string
  id: string
  snippet: Snippet
}

interface YoutubeResponse {
  items: Item[]
}

export const getLastYoutubeUploads = async (quantity: number) => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}&maxResults=${quantity}&order=date`,
    {
      next: { revalidate: 60 * 60 } // 1 hour in seconds
    }
  )

  const data = (await response.json()) as YoutubeResponse

  return data.items.map((item) => {
    return {
      title: item.snippet.title,
      description: item.snippet.description,
      url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
      publishedAt: item.snippet.publishedAt
    }
  })
}
