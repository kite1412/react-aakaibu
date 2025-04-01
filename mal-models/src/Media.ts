import UserListStatus from "./UserListStatus"

export default interface Media<T extends UserListStatus> {
  id: number
  title: string
  main_picture: MainPicture | null
  alternative_titles: AlternativeTitles | null
  start_date: string | null
  end_date: string | null
  synopsis: string | null
  mean: number | null
  rank: number | null
  popularity: number | null
  num_list_users: number
  num_scoring_users: number
  nsfw: Nsfw
  genres: Array<Genre>
  created_at: string
  updated_at: string
  media_type: string
  status: string
  my_list_status: T
}

export type Nsfw = "white" | "gray" | "black" | null

interface MainPicture {
  large: string
  medium: string
}

interface AlternativeTitles {
  synonyms: Array<string> | null
  en: string | null
  ja: string | null
}

interface Genre {
  id: string
  name: string
}