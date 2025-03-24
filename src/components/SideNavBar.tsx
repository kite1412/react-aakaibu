import { JSX } from "react"
import Home from "../assets/home.svg?react"
import Books from "../assets/books.svg?react"
import Tv from "../assets/tv.svg?react"
import Library from "../assets/library.svg?react"
import SignIn from "../assets/sign-in.svg?react"
import ChevronLeft from "../assets/chevron-left.svg?react"
import SignOut from "../assets/sign-out.svg?react"
import { ANIME_PATH, HOME_PATH, MANGA_PATH, USER_LIST_PATH } from "../constants/paths"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { AnimatePresence, motion } from "framer-motion"
import AlignLeft from "../assets/align-left.svg?react"

interface Destination {
  icon: JSX.Element
  path: string
  selected: boolean
  onClick: (path: string) => void
}

const iconButton = "size-[26px] cursor-pointer select-none"

const destinations = (selectedPath: string, onClick: (path: string) => void) => (
  [
    {
      icon: <Home className={iconButton} />,
      path: HOME_PATH,
      selected: selectedPath === HOME_PATH,
      onClick: onClick
    },
    {
      icon: <Tv className={iconButton} />,
      path: ANIME_PATH,
      selected: selectedPath === ANIME_PATH,
      onClick: onClick
    },
    {
      icon: <Books className={iconButton} />,
      path: MANGA_PATH,
      selected: selectedPath === MANGA_PATH,
      onClick: onClick
    },
    {
      icon: <Library className={iconButton} />,
      path: USER_LIST_PATH,
      selected: selectedPath === USER_LIST_PATH,
      onClick: onClick
    }
  ]
)

interface SideNavBarProps {
  visible: boolean
  onVisibleChange: (visible: boolean) => void
  className?: string
}

export default function SideNavBar({ 
  visible,
  onVisibleChange,
  className = ""
}: SideNavBarProps) {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const { pathname } = useLocation()
  const dismissedStyle = {
    opacity: 0,
    marginLeft: "-50px"
  }

  return (
    <>
      <AnimatePresence>
        {
          visible && <motion.div 
            className={`
              h-full w-fit bg-on-background rounded-[32px] px-5 py-8
              flex flex-col justify-between
              ${className}
            `}
            initial={dismissedStyle}
            animate={{
              opacity: 1,
              marginLeft: "0px"
            }}
            exit={dismissedStyle}
          >
            <div className="flex flex-col gap-18 items-center">
              <div className="flex flex-col gap-4">
                {
                  destinations(pathname, p => navigate(p)).map(d => (
                    <DestinationButton 
                      icon={d.icon} 
                      path={d.path}
                      selected={d.selected}
                      onClick={d.onClick} 
                    />
                  ))
                }
              </div>
              {
                !isAuthenticated && <SignIn 
                  className={`text-primary ${iconButton}`}
                />
              }
            </div>
            <div className="flex flex-col gap-12 items-center">
              {
                isAuthenticated && <div className="flex flex-col gap-8">
                  { /* Profile pic */ }
                  <SignOut className={`text-cerise ${iconButton}`} />
                </div>
              }
              <ChevronLeft 
                className={`${iconButton} rounded-full bg-surface p-[2px]`}
                onClick={() => onVisibleChange(false)}
              />
            </div>
          </motion.div>
        }
      </AnimatePresence>
      {
        !visible && <div className={`${className}`}>
          <AlignLeft
            className={`
              size-[48px] ${iconButton} rounded-full
              bg-on-background p-3
            `}
            onClick={() => onVisibleChange(true)}
          />
        </div>
      }
    </>
  )
}

function DestinationButton({
  icon,
  path,
  selected,
  onClick
}: Destination) {
  return (
    <div
      className="relative size-[52px] select-none cursor-pointer"
      onClick={() => onClick(path)}
    >
      <div 
        className={`
          rounded-full bg-surface ${selected ? "scale-100" : "scale-0"}
          transition-transform ease-in-out absolute z-1 size-full
        `}
      />
      <div className="absolute z-2 flex items-center justify-center size-full">
        {icon}
      </div>
    </div>
  )
}