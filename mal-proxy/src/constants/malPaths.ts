export const MAL_V1_BASE_URL = "https://myanimelist.net/v1"
export const MAL_V2_BASE_URL = "https://api.myanimelist.net/v2"
export const MAL_AUTH_BASE_URL = MAL_V1_BASE_URL + "/oauth2"
export const MAL_AUTH_CODE_EXCHANGE = MAL_AUTH_BASE_URL + "/authorize"
export const MAL_AUTH_TOKEN_EXCHANGE = MAL_AUTH_BASE_URL + "/token"
export const MAL_USER_INFO = MAL_V2_BASE_URL + "/users/@me"
export const MAL_USER_ANIME_LIST =
  MAL_USER_INFO + "/animelist?fields=list_status"
