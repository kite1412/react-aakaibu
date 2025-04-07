export function trimString(
  str: string,
  length: number,
  addEllipsis: boolean = true
): string {
  return str.length > length
    ? str.slice(0, length) + `${addEllipsis ? "..." : ""}`
    : str
}

export function capitalize(str: string): string {
  if (!str) return str
  return str.charAt(0).toUpperCase() + str.slice(1)
}
