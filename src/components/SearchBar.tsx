import Search from "../assets/search.svg?react"

interface SearchBarProps {
  value: string
  onValueChange: (newValue: string) => void
  placeholder?: string
  className?: string
}

export default function SearchBar({
  value,
  onValueChange,
  placeholder = "Search title",
  className = ""
}: SearchBarProps) {
  return (
    <div className={`
      flex items-center gap-4 rounded-full py-2 px-6 bg-on-background
      select-none justify-between ${className}
    `}>
      <input 
        value={value}
        onChange={e => onValueChange(e.target.value)}
        placeholder={placeholder}
        className="outline-none flex-9/10"
      />
      <Search 
        className="size-[24px]"
      />
    </div>
  )
}