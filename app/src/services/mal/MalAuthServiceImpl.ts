import { AxiosHttpClient, ContentType } from "http-client"
import { TokenResponse } from "mal-models"
import MalAuthService from "./MalAuthService"
import { MAL_PROXY_TOKEN_EXCHANGE } from "./malProxyPaths"

const MAL_AUTH_CODE_EXCHANGE = "https://myanimelist.net/v1/oauth2/authorize"

export default class MalAuthServiceImpl
  extends AxiosHttpClient
  implements MalAuthService
{
  private readonly REDIRECT_URI = `http://localhost:${import.meta.env.VITE_PORT}/auth-callback`

  authCodeUrl(): string {
    const mapParams = new Map<string, string>([
      ["client_id", import.meta.env.VITE_MAL_CLIENT_ID],
      ["response_type", "code"],
      ["code_challenge", import.meta.env.VITE_STATIC_PKCE],
      ["redirect_uri", this.REDIRECT_URI]
    ])

    const params = Array.from(mapParams).map((v) => `${v[0]}=${v[1]}`)

    return `${MAL_AUTH_CODE_EXCHANGE}?${params.join("&")}`
  }

  async token(code: string): Promise<TokenResponse> {
    const body = new URLSearchParams()
    body.append("client_id", import.meta.env.VITE_MAL_CLIENT_ID)
    body.append("client_secret", import.meta.env.VITE_MAL_CLIENT_SECRET)
    body.append("code", code)
    body.append("code_verifier", import.meta.env.VITE_STATIC_PKCE)
    body.append("redirect_uri", this.REDIRECT_URI)

    return this.post<TokenResponse>({
      url: MAL_PROXY_TOKEN_EXCHANGE,
      contentType: ContentType.FORM_URL_ENCODED,
      body: body
    })
  }
}
