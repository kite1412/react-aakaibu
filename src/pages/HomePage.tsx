import { useState } from "react"
import Languages from "../assets/languages.svg?react"
import SearchBar from "../components/SearchBar"
import PageLayout from "../layouts/PageLayout"

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("");

  return <PageLayout>
    <div className="flex flex-col gap-4">
      <AppLogo />
      <div className="flex gap-6 items-center">
        <div className="flex flex-col gap-10 flex-2/3">
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
        </div>
        <div className="flex-1/3">
          asd
        </div>
      </div>
    </div>
  </PageLayout>
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