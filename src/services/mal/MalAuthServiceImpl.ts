import TokenResponse from "../../models/mal/TokenResponse"
import Client from "../Client"
import MalAuthService from "./MalAuthService"
import { MAL_AUTH_CODE_EXCHANGE } from "./malPaths"

export default class MalAuthServiceImpl extends Client implements MalAuthService {
  async authCode(): Promise<any> {
    return this.get(MAL_AUTH_CODE_EXCHANGE, {
      client_id: import.meta.env.VITE_MAL_CLIENT_ID,
      response_type: "code",
      code_challenge: import.meta.env.VITE_STATIC_PKCE
    })
  }

  token(): Promise<TokenResponse> {
    throw new Error("Method not implemented.")
  }
}