/**
 * Extract jwt from Authorization header, e.g:
 * Authorization: Bearer <jwt>
 */
export function extractJwt(rawHeaderValue: string): string {
  return rawHeaderValue.split(" ")[1]
}
