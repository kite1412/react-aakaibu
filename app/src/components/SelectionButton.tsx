interface SelectionButtonProps {
  action: string
  selected: boolean
  onClick: (action: string) => void
  verticalPadding?: number
  horizontalPadding?: number
  className?: string
}

export default function SelectionButton({
  action,
  selected,
  onClick,
  verticalPadding = 8,
  horizontalPadding = 16,
  className = ""
}: SelectionButtonProps) {
  return (
    <div 
      className={`
        outline-1 ${
          selected ? "bg-secondary outline-secondary" 
          : "bg-transparent outline-content-color"
        } text-white transition-colors rounded-[8px]
        cursor-pointer select-none
        ${className}
      `}
      style={{
        paddingTop: `${verticalPadding}px`,
        paddingBottom: `${verticalPadding}px`,
        paddingRight: `${horizontalPadding}px`,
        paddingLeft: `${horizontalPadding}px`
      }}
      onClick={() => onClick(action)}
    >
      {action}
    </div>
  )
}