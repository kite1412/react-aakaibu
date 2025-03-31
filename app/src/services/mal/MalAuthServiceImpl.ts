import { AxiosHttpClient } from "http-client"
import TokenResponse from "../../models/mal/TokenResponse"
import { ContentType } from "http-client"
import MalAuthService from "./MalAuthService"
import { MAL_AUTH_CODE_EXCHANGE, MAL_AUTH_TOKEN_EXCHANGE } from "./malPaths"

export default class MalAuthServiceImpl extends AxiosHttpClient implements MalAuthService {
  authCodeUrl(): string {
    const mapParams = new Map<string, string>([
      ["client_id", import.meta.env.VITE_MAL_CLIENT_ID],
      ["response_type", "code"],
      ["code_challenge", import.meta.env.VITE_STATIC_PKCE]
    ])

    const params = Array.from(mapParams).map(v => (
      `${v[0]}=${v[1]}`
    ))

    return `${MAL_AUTH_CODE_EXCHANGE}?${params.join("&")}`
  }
  
  /**
   * @deprecated Use {@link authCodeUrl} for redirection instead of 
   *  making a request using this method.
   */
  async authCode(): Promise<unknown> {
    return this.get({
      url: MAL_AUTH_CODE_EXCHANGE,
      params: {
        client_id: import.meta.env.VITE_MAL_CLIENT_ID,
        response_type: "code",
        code_challenge: import.meta.env.VITE_STATIC_PKCE
      }
    })
  }

  async token(code: string): Promise<TokenResponse> {
    const data = new URLSearchParams()
    data.append("client_id", import.meta.env.VITE_MAL_CLIENT_ID)
    data.append("client_secret", import.meta.env.VITE_MAL_CLIENT_SECRET)
    data.append("grant_type", "authorization_code")
    data.append("code", code)
    data.append("code_verifier", import.meta.env.VITE_STATIC_PKCE)
    data.append("redirect_uri", `http://localhost:${import.meta.env.VITE_PORT}/auth-callback`)

    return this.post(MAL_AUTH_TOKEN_EXCHANGE, {
      contentType: ContentType.FORM_URL_ENCODED,
      body: data
    })
  }
}