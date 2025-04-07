import { JSX } from "react"

interface RoundedButtonProps {
  action: JSX.Element | string
  onClick: () => void
  cornerRadius?: number
  verticalPadding?: number
  horizontalPadding?: number
}

export default function RoundedButton({
  action,
  onClick,
  cornerRadius = 100,
  verticalPadding = 4,
  horizontalPadding = 12 
}: RoundedButtonProps) {
  return (
    <div
      className="bg-primary cursor-pointer select-none hover:opacity-80"
      onClick={onClick}
      style={{
        paddingTop: `${verticalPadding}px`,
        paddingBottom: `${verticalPadding}px`,
        paddingRight: `${horizontalPadding}px`,
        paddingLeft: `${horizontalPadding}px`,
        borderRadius: `${cornerRadius}px`
      }}
    >
      {action}
    </div>
  )
}