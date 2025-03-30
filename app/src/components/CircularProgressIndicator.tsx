interface CircularProgressIndicatorProps {
  size?: number
  width?: number
  className?: string
}

export default function CircularProgressIndicator({
  size = 50,
  width = 3,
  className = ""
}: CircularProgressIndicatorProps) {
  return (
    <div 
      className={`
        border-primary/40 border-t-primary border-l-primary
        animate-spin rounded-full ${className}  
      `}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        borderWidth: width,
        borderStyle: "solid",
        borderRadius: 100
      }}
    />
  )
}