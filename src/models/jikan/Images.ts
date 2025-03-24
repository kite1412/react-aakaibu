export default interface Images {
  jpg: Image
  webp: Image
}

interface Image {
  image_url: string
  small_image_url: string
  large_image_url: string
}