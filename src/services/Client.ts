import axios from "axios"

export default abstract class Client {
  protected async get<T>(url: string, params?: any): Promise<T> {
    const res = await axios
      .get(url, { params: params })
      .catch(e => {
        if (e.response) {
          const status = e.response.status
          const errorMessage = `Error ${url} \n status: ${status} \n message: ${e.response.data}`
          console.error(errorMessage)
        } else {
          console.error(`Network error on attempt: ${url}`)
        }
        throw e
      })

    console.log(`Success: ${url}`)
    return res.data
  }
}