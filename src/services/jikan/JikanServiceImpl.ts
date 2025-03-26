import JikanAnime from "../../models/jikan/JikanAnime"
import JikanResponse from "../../models/jikan/JikanResponse"
import Client from "../Client"
import { JIKAN_ANIME_SCHEDULES, JIKAN_TOP_AIRING_ANIME, JIKAN_TOP_ANIME } from "./jikanPaths"
import JikanService from "./JikanService"
import CommonMediaParams from "./query-params/CommonMediaParams"

export default class JikanServiceImpl extends Client implements JikanService {
  async getTopAnime(params?: CommonMediaParams): Promise<JikanResponse<Array<JikanAnime>>> {
    return this.get(JIKAN_TOP_ANIME, params)
  }

  async getTopAiringAnime(params?: CommonMediaParams): Promise<JikanResponse<Array<JikanAnime>>> {
    return this.get(JIKAN_TOP_AIRING_ANIME, params)
  }

  async getAnimeSchedules(params?: CommonMediaParams): Promise<JikanResponse<Array<JikanAnime>>> {
    return this.get(JIKAN_ANIME_SCHEDULES, params)
  }
}