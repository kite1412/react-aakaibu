import JikanAnime from "../../models/jikan/JikanAnime"
import JikanResponse from "../../models/jikan/JikanResponse"
import Client from "../Client"
import { JIKAN_TOP_AIRING_ANIME, JIKAN_TOP_ANIME } from "./jikanPaths"
import JikanService from "./JikanService"

export default class JikanServiceImpl extends Client implements JikanService {
  async getTopAnime(): Promise<JikanResponse<Array<JikanAnime>>> {
    return this.get(JIKAN_TOP_ANIME)
  }

  async getTopAiringAnime(): Promise<JikanResponse<Array<JikanAnime>>> {
    return this.get(JIKAN_TOP_AIRING_ANIME)
  }
}