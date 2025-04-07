export function convertJstClockToLocal(clock: string, day: number): string[] {
  const splitted = clock
    .split(":")
    .map((s) => Number(s))
    .filter((n) => !Number.isNaN(n))

  if (splitted.length !== 2) return ["", ""]

  const date = new Date()

  const newDate = date.getUTCDate() + day - (date.getUTCDay() !== 0 ? date.getUTCDay() : 7)
  date.setUTCDate(newDate)
  date.setUTCHours(splitted[0] - 9, splitted[1], 0, 0)

  return [
    date.toLocaleDateString([], {
      weekday: "long"
    }),
    date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23"
    })
  ]
}

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
]

export function getDayNumber(day: string): number {
  const index = days.indexOf(day.toLowerCase())
  return index >= 0 ? index + 1 : -1
}