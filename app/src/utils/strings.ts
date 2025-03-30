export function trimString(str: string, length: number, addEllipsis: boolean = true): string {
  return str.length > length ? (str.slice(0, length) + `${addEllipsis ? "..." : ""}`) : str
}