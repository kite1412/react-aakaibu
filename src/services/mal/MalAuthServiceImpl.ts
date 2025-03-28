import TokenResponse from "../../models/mal/TokenResponse"
import Client, { ContentType } from "../Client"
import MalAuthService from "./MalAuthService"
import { MAL_AUTH_CODE_EXCHANGE, MAL_AUTH_TOKEN_EXCHANGE } from "./malPaths"

export default class MalAuthServiceImpl extends Client implements MalAuthService {
  async authCode(): Promise<any> {
    return this.get(MAL_AUTH_CODE_EXCHANGE, {
      client_id: import.meta.env.VITE_MAL_CLIENT_ID,
      response_type: "code",
      code_challenge: import.meta.env.VITE_STATIC_PKCE
    })
  }

  async token(code: string): Promise<TokenResponse> {
    const data = new URLSearchParams()
    data.append("client_id", import.meta.env.VITE_MAL_CLIENT_ID)
    data.append("client_secret", import.meta.env.VITE_MAL_CLIENT_SECRET)
    data.append("grant_type", "authorization_code")
    data.append("code", code)
    data.append("code_verifier", import.meta.env.VITE_STATIC_PKCE)
    data.append("redirect_uri", `http://localhost:${import.meta.env.VITE_PORT}`)

    return this.post(MAL_AUTH_TOKEN_EXCHANGE, {
      contentType: ContentType.FORM_URL_ENCODED,
      body: data
    })
  }
}