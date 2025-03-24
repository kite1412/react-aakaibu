import MalUrl from "./MalUrl"
import Images from "./Images"

export default interface Media {
  malId: number
  url: string
  images: Images
  approved: boolean
  titles: Array<Title>
  title: string
  titleEnglish: string | null
  titleJapanese: string | null
  type: string | null
  status: string | null
  score: number | null
  rank: number | null
  scoredBy: number | null
  popularity: number | null
  members: number | null
  favorites: number | null
  synopsis: string | null
  background: string | null
  genres: Array<MalUrl>
  explicitGenres: Array<MalUrl>
  themes: Array<MalUrl>
  demographics: Array<MalUrl>
}

interface Title {
  type: string
  title: string
}