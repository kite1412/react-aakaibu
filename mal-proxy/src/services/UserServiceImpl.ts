import UserService from "./UserService"
import { UserInfo } from "mal-models"
import { MAL_USER_INFO } from "../constants/malPaths"
import { AxiosHttpClient } from "http-client"

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
