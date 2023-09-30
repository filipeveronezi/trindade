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

export const getLastYoutubeUpload = async () => {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}&maxResults=1&order=date`,
    {
      next: { revalidate: 60 * 60 } // 1 hour in seconds
    }
  )

  const data = (await response.json()) as YoutubeResponse

  return {
    title: data.items[0].snippet.title,
    description: data.items[0].snippet.description,
    url: `https://www.youtube.com/watch?v=${data.items[0].snippet.resourceId.videoId}`
  }
}
