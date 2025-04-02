import { AxiosHttpClient, ContentType } from "http-client"
import AuthService from "./AuthService"
import { TokenResponse } from "mal-models"
import { MAL_AUTH_TOKEN_EXCHANGE } from "../../constants/malPaths"

export default class AuthServiceImpl
  extends AxiosHttpClient
  implements AuthService
{
  async exchangeToken(
    authCode: string,
    clientId: string,
    clientSecret: string,
    redirectUri: string,
    codeVerifier: string
  ): Promise<TokenResponse> {
    return this.post({
      url: MAL_AUTH_TOKEN_EXCHANGE,
      contentType: ContentType.FORM_URL_ENCODED,
      body: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code: authCode,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier
      }
    })
  }

  async refreshAccessToken(
    refreshToken: string,
    clientId: string,
    clientSecret: string
  ): Promise<TokenResponse> {
    return this.post({
      url: MAL_AUTH_TOKEN_EXCHANGE,
      contentType: ContentType.FORM_URL_ENCODED,
      body: {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret
      }
    })
  }
}

export interface ExchangeTokenBody {
  client_id: string,
  client_secret: string,
  code: string,
  redirect_uri: string,
  code_verifier: string
}