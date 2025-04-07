import Images from "./Images"
import MalUrl from "./MalUrl"
import Title from "./Title"

export default interface JikanMedia {
  mal_id: number
  url: string
  images: Images
  approved: boolean
  titles: Array<Title>
  title: string
  title_english: string | null
  title_japanese: string | null
  type: string | null
  status: string | null
  score: number | null
  rank: number | null
  scored_by: number | null
  popularity: number | null
  members: number | null
  favorites: number | null
  synopsis: string | null
  background: string | null
  genres: Array<MalUrl>
  explicit_genres: Array<MalUrl>
  themes: Array<MalUrl>
  demographics: Array<MalUrl>
}