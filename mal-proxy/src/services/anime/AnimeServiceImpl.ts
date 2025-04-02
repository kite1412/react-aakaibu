import { AxiosHttpClient } from "http-client"
import AnimeService from "./AnimeService"
import Anime from "mal-models/dist/Anime"
import ListResponse from "mal-models/dist/ListResponse"
import { MAL_USER_ANIME_LIST } from "../../constants/malPaths"
import UserMediaList from "mal-models/dist/MediaAnimeList"
import UserAnimeListStatus from "mal-models/dist/UserAnimeListStatus"

export default class AnimeServiceImpl
  extends AxiosHttpClient
  implements AnimeService
{
  async getUserAnimeList(
    token: string
  ): Promise<ListResponse<UserMediaList<Anime, UserAnimeListStatus>>> {
    return this.get({
      url: MAL_USER_ANIME_LIST,
      bearerToken: token
    })
  }
}
