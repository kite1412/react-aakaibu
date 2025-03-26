import ChevronLeft from "../assets/chevron-left.svg?react"
import ChevronRight from "../assets/chevron-right.svg?react"

interface DotsIndicatorProps {
  dotsCount: number
  selectedIndex: number
  onIndexChange: (newIndex: number) => void
  dotDiameter?: number
  dotsGap?: number
  className?: string
}

export default function DotsIndicator({
  dotsCount,
  selectedIndex,
  onIndexChange,
  dotDiameter = 12,
  dotsGap = 4,
  className = ""
}: DotsIndicatorProps) {
  if (dotsCount <= 0) return

  const iconStyle = {
    height: `${dotDiameter * 2.2}px`,
    width: `${dotDiameter * 2.2}px`
  }
  const iconClassName = "cursor-pointer hover:opacity-80"

  return (
    <div className={`flex items-center text-primary select-none gap-1 ${className}`}>
      <ChevronLeft
        className={iconClassName}
        onClick={() => {
          if (dotsCount > 0) onIndexChange(selectedIndex - 1)
        }}
        style={iconStyle}
      />
      <div 
        className="flex"
        style={{
          gap: `${dotsGap}px`
        }}
      >
        {
          Array.from({ length: dotsCount }).map((_, i) => (
            <div 
              className={`
                rounded-full ${selectedIndex === i ? "bg-primary" : "bg-dark-gray"}
                transition-colors duration-300 ease-in-out   
              `}
              style={{
                height: `${dotDiameter}px`,
                width: `${dotDiameter}px`
              }}
            />
          ))
        }
      </div>
      <ChevronRight
        className={iconClassName}
        onClick={() => {
          if (selectedIndex < dotsCount - 1) onIndexChange(selectedIndex + 1)
        }}
        style={iconStyle}
      />
    </div>
  )
}