import Images from "../../../models/jikan/Images"
import JikanImageSize from "../../../models/jikan/JikanImageSize"
import Title from "../../../models/jikan/Title"
import TitleType from "../../../models/jikan/TitleType"

export function getPreferredTitle(titles: Array<Title>): Title | undefined {
  const find = (stringType: string) => (
    titles.find(({ type }) => type === stringType)
  )
  
  return find(TitleType.Default) 
    ?? find(TitleType.English) 
    ?? find(TitleType.Japanese) 
    ?? find(TitleType.Synonym)
}

export function getPrefferedTitleString(titles: Array<Title>): string {
  return getPreferredTitle(titles)?.title ?? "No title available"
}

export function getJpgImage(images: Images, size: JikanImageSize): string {
  const jpg = images.jpg
  
  switch (size) {
    case JikanImageSize.Normal:
      return jpg.image_url
    case JikanImageSize.Small:
      return jpg.small_image_url
    case JikanImageSize.Large:
      return jpg.large_image_url 
  }
}