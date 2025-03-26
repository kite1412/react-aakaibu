import JikanAnime from "../../models/jikan/JikanAnime"
import JikanResponse from "../../models/jikan/JikanResponse"
import CommonMediaParams from "./query-params/CommonMediaParams"

export default interface JikanService {
  getTopAnime(params?: CommonMediaParams): Promise<JikanResponse<Array<JikanAnime>>>

  getTopAiringAnime(params?: CommonMediaParams): Promise<JikanResponse<Array<JikanAnime>>>

  getAnimeSchedules(params?: CommonMediaParams): Promise<JikanResponse<Array<JikanAnime>>>
}