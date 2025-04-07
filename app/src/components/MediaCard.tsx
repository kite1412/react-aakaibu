import { JSX } from "react"
import Media from "../models/Media"
import Star from "../assets/star.svg?react"
import { formatNumber } from "../utils/numbers"

interface MediaCardProps {
  media: Media
  top?: JSX.Element | string
  bottom?: JSX.Element | string
  onClick?: () => void
  className?: string
}

export default function MediaCard({
  media,
  top,
  bottom,
  onClick,
  className
}: MediaCardProps) {
  const showGenreCount = 2

  return (
    <div 
      className={`
        flex p-4 gap-4 outline-[2px] outline-surface rounded-[32px] 
        cursor-pointer hover:outline-silver transition-colors ${className}
      `}
      onClick={onClick}
    >
      <img 
        src={media.imageUrl}
        className="h-[180px] aspect-[3/4] rounded-[16px] select=-none"
      />
      <div className="flex flex-col gap-2 pt-2 flex-2/3">
        {top ? top : <></>}
        <div>
          <div className="text-medium font-bold text-white line-clamp-2">
            {media.title}
          </div>
          <div className="text-dark-gray">
            {`${media.releaseDate ?? "N/A"} • ${
              media.entries && media.entriesDesc ? (media.entries + " " + media.entriesDesc) : "N/A"}`
            }
          </div>
        </div>
        <div className="flex items-center gap-4 justify-between">
          <div className="flex gap-2 items-center text-white">
            <Star 
              className="size-[1.2rem]"
            />
            {`${media.score ?? "N/A"}`}
          </div>
          <span className="text-dark-gray">
            {`${media.scoredBy ? (formatNumber(media.scoredBy) + " users") : "N/A"}`}
          </span>
        </div>
        <div className="flex gap-2 mt-auto flex-wrap">
          {
            media.genres.slice(0, showGenreCount).map(g => (
              <GenreBar genre={g} />
            ))
          }
          {
            media.genres.length > showGenreCount && <GenreBar 
              genre={`${media.genres.length - showGenreCount}+`}
            />
          }
        </div>
        {bottom ? bottom : <></>}
      </div>
    </div>
  )
}

function GenreBar({
  genre
}: {
  genre: string
}) {
 return (
  <div className="py-1 px-2 rounded-[8px] bg-surface">
    {genre}
  </div>
 ) 
}