import Media from "../models/Media";
import MediaCard from "./MediaCard";

interface MediaCardsProps {
  mediaList: Array<Media>
  onClick: (media: Media) => void
}

export default function MediaCards({
  mediaList,
  onClick
}: MediaCardsProps) {
  return (
    <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-4">
      {
        mediaList.map(m => (
          <MediaCard 
            media={m}
            onClick={() => onClick(m)}
          />
        ))
      }
    </div>
  )
}