import { Anime } from "mal-models"
import { ListResponse } from "mal-models"
import { UserMediaList } from "mal-models"
import { UserAnimeListStatus } from "mal-models"

export default interface AnimeService {
  getUserAnimeList(
    token: string
  ): Promise<ListResponse<UserMediaList<Anime, UserAnimeListStatus>>>
}
