import { TokenResponse } from "mal-models"

export default interface MalAuthService {
  authCodeUrl(): string

  token(code: string): Promise<TokenResponse>
}
