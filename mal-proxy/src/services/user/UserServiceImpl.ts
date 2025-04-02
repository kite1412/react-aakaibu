import UserService from "./UserService"
import { AxiosHttpClient } from "http-client"
import { UserInfo } from "mal-models"
import { MAL_USER_INFO } from "../../constants/malPaths"

export default class UserServiceImpl
  extends AxiosHttpClient
  implements UserService
{
  async getUserInfo(token: string): Promise<UserInfo> {
    return this.get({
      url: MAL_USER_INFO,
      bearerToken: token
    })
  }
}
