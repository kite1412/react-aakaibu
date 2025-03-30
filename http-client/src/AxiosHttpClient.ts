import axios, { AxiosResponse } from "axios"

export abstract class AxiosHttpClient {
  protected async get<T>({
    url,
    params, 
    bearerToken
  }: GetRequest): Promise<T> {
    const res: AxiosResponse<T, unknown> = await axios
      .get<T>(
        url,
        {
          params: params,
          headers: {
            ...(bearerToken && { Authorization: bearerToken })
          }
        }
      )
      .catch(e => {
        this.logAndThrowError(url, e)
      })

    this.logSuccess(url, "Get")
    return res.data
  }

  protected async post<T>(url: string, request: PostRequest): Promise<T> {
    const res: AxiosResponse<T, unknown> = await axios
      .post<T>(
        url, 
        request.body, 
        {
          headers: {
            "Content-Type": request.contentType,
            ...(request.bearerToken && { Authorization: `Bearer ${request.bearerToken}` })
          }
        }
      )
      .catch(e => {
        this.logAndThrowError(url, e)
      })

      this.logSuccess(url, "Post")
      return res.data
  }

  private logAndThrowError(url: string, error: any): never {
    if (error.response) {
      const status = error.response.status
      const errorMessage = `Error ${url} \n status: ${status} \n message: ${JSON.stringify(error.response.data)}`
      console.error(errorMessage)
    } else {
      console.error(`Network error on attempt: ${url}`)
    }
    throw error
  }

  private logSuccess(url: string, method: string) {
    console.log(`Success: ${url}, method: ${method}`)
  }
}

export enum ContentType {
  JSON = "application/json",
  FORM_URL_ENCODED = "application/x-www-form-urlencoded"
}

interface PostRequest {
  contentType: ContentType
  body: unknown
  bearerToken?: string
}

interface GetRequest {
  url: string
  params?: unknown
  bearerToken?: string
}