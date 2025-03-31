import { AxiosHttpClient } from "http-client"
import { TOKEN } from "../../constants/storageKeys"
import UserInfo from "../../models/mal/UserInfo"
import { MAL_USER_INFO } from "./malPaths"
import MalService from "./MalService"

export default class MalServiceImpl extends AxiosHttpClient implements MalService {
  getUserInfo(): Promise<UserInfo> | null {
    const token = localStorage.getItem(TOKEN)

    if (token === null) return null
    
    return this.get({
      url: MAL_USER_INFO,
      bearerToken: JSON.parse(token).access_token
    })
  }
}