import DateRange from "./DateRange"
import MalUrl from "./MalUrl"
import Media from "./Media"

export default interface JikanAnime extends Media {
  trailer: Trailer
  source: string | null
  episodes: number | null
  airing: boolean
  aired: DateRange
  duration: string | null
  rating: string | null
  season: string | null
  broadcast: Broadcast
  producers: Array<MalUrl>
  licensors: Array<MalUrl>
  studios: Array<MalUrl>
}

interface Trailer {
  youtube_id: string | null
  url: string | null
  embed_url: string | null
}

interface Broadcast {
  day: string | null
  time: string | null
  timezone: string | null
  string: string | null
}
