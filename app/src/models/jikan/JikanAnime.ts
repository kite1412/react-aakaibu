import { getJpgImage, getPrefferedTitleString } from "../../services/jikan/utils/responseUtils"
import { capitalize } from "../../utils/strings"
import Media from "../Media"
import DateRange from "./DateRange"
import JikanImageSize from "./JikanImageSize"
import JikanMedia from "./JikanMedia"
import MalUrl from "./MalUrl"

export default interface JikanAnime extends JikanMedia {
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

export function toMedia({
  titles,
  images,
  genres,
  episodes,
  season,
  score,
  scored_by
}: JikanAnime): Media {
  return {
    title: getPrefferedTitleString(titles),
    imageUrl: getJpgImage(images, JikanImageSize.Large),
    genres: genres.map(g => g.name),
    entries: episodes ?? undefined,
    releaseDate: capitalize(season ?? ""),
    score: score ?? undefined,
    scoredBy: scored_by ?? undefined
  }
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
