import JikanService from "./services/jikan/JikanService"
import JikanServiceImpl from "./services/jikan/JikanServiceImpl"

export const jikanService: JikanService = new JikanServiceImpl()