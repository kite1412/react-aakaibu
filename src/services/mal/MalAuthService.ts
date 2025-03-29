import TokenResponse from "../../models/mal/TokenResponse"

export default interface MalAuthService {
  authCodeUrl(): string

  // ignore response
  authCode(): Promise<any>

  token(code: string): Promise<TokenResponse>
}