import JikanService from "./services/jikan/JikanService"
import JikanServiceImpl from "./services/jikan/JikanServiceImpl"
import MalAuthService from "./services/mal/MalAuthService"
import MalAuthServiceImpl from "./services/mal/MalAuthServiceImpl"
import MalService from "./services/mal/MalService"
import MalServiceImpl from "./services/mal/MalServiceImpl"

export const jikanService: JikanService = new JikanServiceImpl()
export const malAuthService: MalAuthService = new MalAuthServiceImpl()
export const malService: MalService = new MalServiceImpl()