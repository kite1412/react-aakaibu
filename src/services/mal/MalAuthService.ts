import TokenResponse from "../../models/mal/TokenResponse"

export default interface MalAuthService {
  // ignore response
  authCode(): Promise<any>

  token(): Promise<TokenResponse>
}