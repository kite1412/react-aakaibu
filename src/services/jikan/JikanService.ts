import JikanAnime from "../../models/jikan/JikanAnime"
import JikanResponse from "../../models/jikan/JikanResponse"

export default interface JikanService {
  getTopAnime(): Promise<JikanResponse<Array<JikanAnime>> | null>

  getTopAiringAnime(): Promise<JikanResponse<Array<JikanAnime>> | null>
}