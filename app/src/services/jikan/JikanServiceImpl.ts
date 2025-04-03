import { AxiosHttpClient } from "http-client"
import JikanAnime from "../../models/jikan/JikanAnime"
import JikanResponse from "../../models/jikan/JikanResponse"
import { JIKAN_ANIME_SCHEDULES, JIKAN_TOP_ANIME } from "./jikanPaths"
import JikanService from "./JikanService"
import CommonMediaParams from "./query-params/CommonMediaParams"

export default class JikanServiceImpl
  extends AxiosHttpClient
  implements JikanService
{
  async getTopAnime(
    params?: CommonMediaParams
  ): Promise<JikanResponse<Array<JikanAnime>>> {
    return this.get({
      url: JIKAN_TOP_ANIME,
      params: params
    })
  }

  async getTopAiringAnime(
    params?: CommonMediaParams
  ): Promise<JikanResponse<Array<JikanAnime>>> {
    return this.getTopAnime({
      ...params,
      ...{
        filter: "airing"
      }
    })
  }

  async getAnimeSchedules(
    params?: CommonMediaParams
  ): Promise<JikanResponse<Array<JikanAnime>>> {
    return this.get({
      url: JIKAN_ANIME_SCHEDULES,
      params: params
    })
  }

  async getTopUpcomingAnime(
    params: CommonMediaParams
  ): Promise<JikanResponse<Array<JikanAnime>>> {
    return this.getTopAnime({
      ...params,
      ...{
        filter: "upcoming"
      }
    })
  }
}
