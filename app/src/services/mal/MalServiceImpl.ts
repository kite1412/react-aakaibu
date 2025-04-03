import { AxiosHttpClient } from "http-client"
import { UserInfo } from "mal-models"
import { MAL_TOKEN } from "../../constants/storageKeys"
import MalService from "./MalService"
import { MAL_PROXY_USER_INFO } from "./malProxyPaths"

export default class MalServiceImpl
  extends AxiosHttpClient
  implements MalService
{
  async getUserInfo(): Promise<UserInfo | undefined> {
    const token = localStorage.getItem(MAL_TOKEN)

    if (!token) return

    return this.get({
      url: MAL_PROXY_USER_INFO,
      bearerToken: token
    })
  }
}
