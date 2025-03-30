import { JSX } from "react"

export default function PageLayout({ 
  children
}: {
  children: JSX.Element
}) {
  return (
    <div className="px-8 py-12 size-full overflow-y-auto">
      {children}
    </div>
  )
}