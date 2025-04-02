import { TokenResponse } from "mal-models";

export default interface AuthService {
  exchangeToken(
    authCode: string, 
    clientId: string, 
    clientSecret: string, 
    redirectUri: string,
    codeVerifier: string
  ): Promise<TokenResponse>
  
  refreshAccessToken(refreshToken: string, clientId: string, clientSecret: string): Promise<TokenResponse>
}