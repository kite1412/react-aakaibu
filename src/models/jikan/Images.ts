export default interface Images {
  jpg: Image
  webp: Image
}

interface Image {
  imageUrl: string
  smallImageUrl: string
  largeImageUrl: string
}