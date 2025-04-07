import { JSX } from "react";
import Media from "../models/Media";
import MediaCard from "./MediaCard";

interface MediaCardsProps {
  mediaList: Array<Media>
  onClick: (media: Media) => void
  top?: (media: Media) => JSX.Element | string
  bottom?: (media: Media) => JSX.Element | string
}

export default function MediaCards({
  mediaList,
  onClick,
  top,
  bottom
}: MediaCardsProps) {
  return (
    <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-4">
      {
        mediaList.map(m => (
          <MediaCard 
            media={m}
            onClick={() => onClick(m)}
            top={typeof top === "function" ? top(m) : undefined}
            bottom={typeof bottom === "function" ? bottom(m) : undefined}
          />
        ))
      }
    </div>
  )
}