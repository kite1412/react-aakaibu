export default interface Media {
  id: number
  title: string
  imageUrl: string
  genres: Array<string>
  entries?: number
  entriesDesc?: string
  releaseDate?: string
  score?: number
  scoredBy?: number
}
