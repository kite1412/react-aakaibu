import { useQuery } from "@tanstack/react-query"
import { AnimatePresence, easeInOut, motion } from "framer-motion"
import { useEffect, useState } from "react"
import Languages from "../assets/languages.svg?react"
import ListPlus from "../assets/list-plus.svg?react"
import Radio from "../assets/radio.svg?react"
import RightArrow from "../assets/right-arrow.svg?react"
import Star from "../assets/star.svg?react"
import CircularProgressIndicator from "../components/CircularProgressIndicator"
import DotsIndicator from "../components/DotsIndicator"
import MediaCards from "../components/MediaCards"
import RoundedButton from "../components/RoundedButton"
import SearchBar from "../components/SearchBar"
import SelectionButton from "../components/SelectionButton"
import PageLayout from "../layouts/PageLayout"
import JikanAnime, { jikanAnimeToMedia } from "../models/jikan/JikanAnime"
import JikanImageSize from "../models/jikan/JikanImageSize"
import JikanMedia from "../models/jikan/JikanMedia"
import { jikanService } from "../services"
import { getJpgImage, getPrefferedTitleString } from "../services/jikan/utils/responseUtils"
import { formatNumber } from "../utils/numbers"
import { trimString } from "../utils/strings"
import { convertJstClockToLocal, getDayNumber } from "../utils/dates"
import CalendarClock from "../assets/calendar-clock.svg?react"

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("")
  const leaderboardItemsCount = 3
  const topAiringAnime = useQuery({
    queryKey: ["airingAnime"],
    queryFn: () => jikanService.getTopAiringAnime({
      limit: leaderboardItemsCount
    })
  })
  const topUpcomingAnime = useQuery({
    queryKey: ["upcomingAnime"],
    queryFn: () => jikanService.getTopUpcomingAnime({
      limit: leaderboardItemsCount
    })
  })

  return <PageLayout>
    <div className="flex flex-col gap-4">
      <AppLogo />
      <div className="flex gap-6">
        <div className="flex flex-col gap-10 flex-[70%]">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center select-none">
              <Languages />
              <i className="text-medium">~Archive</i>
            </div>
            <SearchBar
              value={searchValue}
              onValueChange={setSearchValue}
            />
          </div>
          <AiringNow />
          <AnimeSchedule />
        </div>
        <div className="flex-[30%] pt-2 flex flex-col gap-6">
          {
            !topAiringAnime.isPending ? <MediaLeaderboard 
              category="Top Airing Anime"
              mediaList={topAiringAnime.data?.data ?? []}
              itemsCount={leaderboardItemsCount}
            /> : <LeadboardLoadingIndicator itemsCount={leaderboardItemsCount} />
          }
          {
            !topUpcomingAnime.isPending ? <MediaLeaderboard 
              category="Top Upcoming Anime"
              mediaList={topUpcomingAnime.data?.data ?? []}
              itemsCount={leaderboardItemsCount}
            /> : <LeadboardLoadingIndicator itemsCount={leaderboardItemsCount} />
          }
        </div>
      </div>
    </div>
  </PageLayout>
}

function LeadboardLoadingIndicator({
  itemsCount
}: {
  itemsCount: number
}) {
  return (
    <div
      style={{
        // 80 = cover image height
        height: `${itemsCount * 80}px`
      }}
      className="w-full flex justify-center items-center"
    >
      <CircularProgressIndicator />
    </div>
  )
}

function AppLogo() {
  return (
    <div className="font-bold flex flex-col gap-4 select-none">
      <span
        className="text-5xl text-primary"
        style={{
          textShadow: "-2px 3px 4px rgba(255,255,255,0.25)"
        }}
      >
        アーカイブ
      </span>
    </div>
  )
}

function AiringNow() {
  const dataLength = 7
  const { data, isPending } = useQuery({
    queryKey: ["airingAnime"],
    queryFn: () => jikanService.getTopAiringAnime({
      limit: dataLength
    })
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dismissedStyle = {
    opacity: 0,
    scale: 0
  }

  return (
    !isPending ? <div className="flex relative flex-col items-end gap-1">
      <div className="flex text-medium gap-[2px] select-none">
        Airing Now
        <motion.div 
          className="rotate-30 size-[1.5rem] mt-[-3px]"
          transition={{ repeat: Infinity, duration: 2 }}
          animate={{ scale: [1.4, 1, 1.4] }}
        >
          <Radio className="size-full" />
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {
          data?.data[selectedIndex] && (
            <motion.div
              key={selectedIndex}
              className="w-full flex justify-end"
              exit={dismissedStyle}
              initial={dismissedStyle}
              animate={{
                scale: 1,
                opacity: 1
              }}
              transition={{
                duration: 0.3,
                ease: easeInOut
              }}
            >
              <AiringAnime
                anime={data?.data[selectedIndex]}
                onAddToList={aa => {}}
              />
            </motion.div>
          )
        }
      </AnimatePresence>
      <DotsIndicator 
        selectedIndex={selectedIndex}
        onIndexChange={i => setSelectedIndex(i)}
        dotsCount={dataLength}
        dotsGap={8}
        className="mx-auto"
      />
    </div> : <div className="h-[300px] w-full flex items-center justify-center">
      <CircularProgressIndicator />
    </div>
  )
}

function AiringAnime({ 
  anime,
  onAddToList
}: {
  anime: JikanAnime
  onAddToList: (anime: JikanAnime) => void
}) {
  return (
    <div className="flex gap-4 items-center cursor-pointer">
      <div className="flex flex-col gap-4 items-end text-end ps-10 flex-3/4 overflow-ellipsis">
        <h2 className="font-bold ps-10">
          {trimString(getPrefferedTitleString(anime.titles), 50)}
        </h2>
        <p className="line-clamp-3">
          {trimString(anime.synopsis ?? "", 150)}
        </p>
        <span className="text-white">
          {
            anime.genres.length > 0 
              ? anime.genres.slice(0, 3).map(g => g.name).join(" • ")
              : ""
          } 
          {
            " | " + (anime.studios[0]?.name ?? "")
          }
        </span>
        <RoundedButton 
          action={<ListPlus className="size-[30px]" />}
          onClick={() => onAddToList(anime)}
          verticalPadding={15}
          horizontalPadding={15}
        />
      </div>
      <div className="flex-1/4 w-full aspect-[3/4] min-w-[225px] rounded-[16px] overflow-hidden select-none">
        <img
          src={getJpgImage(anime.images, JikanImageSize.Large)}
          className="size-full duration-400 transition-transform hover:scale-110 object-fill"
        />
      </div>
    </div>
  )
}

function MediaLeaderboard({
  category,
  mediaList,
  itemsCount
}: {
  category: string
  mediaList: Array<JikanMedia>
  itemsCount: number
}) {
  return (
    <div className="flex flex-col gap-4">
      <b className="text-medium text-white">{category}</b>
      <div className="flex flex-col gap-2 ps-3">
        {
          mediaList.slice(0, itemsCount).map((m, i) => (
            <RankItem 
              rank={i + 1}
              media={m}
            />
          ))
        }
      </div>
      {/* 1.3rem + 12px = text-medium + RankItem parent flex row gap */}
      <div className="flex gap-3 items-center justify-end ps-[calc(1.3rem+12px)]">
        <div 
          className="flex-3/4 h-[2px] bg-surface rounded-full"
        />
        <div 
          className={`
            flex flex-1/4 items-center text-secondary gap-1 text-sm
            cursor-pointer select-none  
          `}
        >
          See More
          <RightArrow
            className="size-[0.8rem]"
          />
        </div>
      </div>
    </div>
  )
}

function RankItem({
  rank,
  media,
  onClick
}: {
  rank: number
  media: JikanMedia
  onClick?: (media: JikanMedia) => void
}) {
  return (
    <div 
      className="flex gap-3 cursor-pointer"
      onClick={() => onClick?.(media)}
    >
      <b className={`
        text-medium ${getRankColor(rank)}
      `}>{rank}</b>
      <div className="flex gap-1">
        <img
          src={getJpgImage(media.images, JikanImageSize.Normal)}
          className="rounded-[4px] h-[80px] w-[52px]"
        />
        <div className="pt-1 gap-[2px] flex flex-col">
          <span className="font-bold line-clamp-1">
            {getPrefferedTitleString(media.titles)}
          </span>
          <div className="flex items-center text-sm gap-1">
            <Star className="size-[0.875rem]" />
            {
              media.score !== null ? media.score : "N/A"
            }
          </div>
          <p className="text-sm">
            {
              media.scored_by !== null ? `${formatNumber(media.scored_by)} users` : "N/A"
            }
          </p>
        </div>
      </div>
    </div>
  )
}

function getRankColor(rank: number): string {
  switch (rank) {
    case 1:
      return "text-gold"
    case 2:
      return "text-silver"
    case 3:
      return "text-bronze"
    default:
      return "text-content-color"
  }
}

const days = [
  ["Mon", "monday"],
  ["Tue", "tuesday"],
  ["Wed", "wednesday"],
  ["Thu", "thursday"],
  ["Fri", "friday"],
  ["Sat", "saturday"],
  ["Sun", "sunday"]
]

function AnimeSchedule() {
  const [day, setDay] = useState(days[0][1])
  const { data, isPending } = useQuery({
    queryKey: ["animeSchedule", day],
    queryFn: async () => {
      const res = await jikanService.getAnimeSchedules({
        filter: day
      })
      return res
    } 
  })

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <div className="font-bold text-medium">Anime Schedule</div>
        <div className="flex gap-2">
          {
            days.map(d => {
              const [abr, query] = d
              return <SelectionButton 
                action={abr}
                selected={query === day}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onClick={_ => setDay(query)}
              />
            })
          }
        </div>
      </div>
      {
        !isPending ? <MediaCards 
          mediaList={data?.data.map(a => jikanAnimeToMedia(a)) ?? []}
          onClick={m => {}}
          top={m => {
            const broadcast = data?.data.find(a => a.mal_id === m.id)?.broadcast
            const [airDate, clock] = convertJstClockToLocal(
              broadcast?.time ?? "",
              getDayNumber(broadcast?.day?.slice(0, -1) ?? "")
            )

            return <div className="flex items-center gap-2">
              <CalendarClock
                className="size-[1.2rem]"
              />
              <span>
                <span className={`
                  ${airDate.toLowerCase() !== day && "text-cerise"}  
                `}>
                  {airDate}
                </span>
                {" " + clock}
              </span>
            </div>
          }}
        /> : <div className="w-full flex justify-center">
          <CircularProgressIndicator />
        </div>
      }
    </div>
  )
}