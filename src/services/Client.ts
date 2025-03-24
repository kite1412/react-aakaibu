export default abstract class Client {
  async get<T>(url: string): Promise<T | null> {
    try {
      const res = await fetch(url)

      if (!res.ok) {
        let errorMessage = `Error ${url} \n status: ${res.status}`
        try {
          const message = await res.json()
          errorMessage += `\n message: ${message}`
        } catch {
          errorMessage += "\n no message"
        }

        throw new Error(errorMessage)
      }

      return await res.json()
    } catch (err) {
      console.error(err)
      return null
    }
  }
}