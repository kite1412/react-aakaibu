import Languages from "../assets/languages.svg?react"
import PageLayout from "../layouts/PageLayout"

export default function HomePage() {
  return <PageLayout>
    <div className="flex gap-4">
      <div className="flex flex-col gap-10">
        <AppLogo />
      </div>
    </div>
  </PageLayout>
}

function AppLogo() {
  return (
    <div className="font-bold flex flex-col gap-4">
      <span
        className="text-5xl text-primary"
        style={{
          textShadow: "-2px 3px 4px rgba(255,255,255,0.25)"
        }}
      >
        アーカイブ
      </span>
      <div className="flex gap-2 items-center">
        <Languages />
        <i className="text-medium">~Archive</i>
      </div>
    </div>
  )
}