import { useEffect } from "react"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { MAL_TOKEN, MAL_REFRESH_TOKEN } from "../constants/storageKeys"
import useAuth from "../contexts/auth/AuthContext"
import PageLayout from "../layouts/PageLayout"
import { malAuthService } from "../services"

export default function AuthCallbackPage() {
  const [searchParams] = useSearchParams()
  const authCode = searchParams.get("code")
  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()

  useEffect(() => {
    if (authCode !== null) {
      const exchangeToken = async () => {
        try {
          const res = await malAuthService.token(authCode)
          localStorage.setItem(MAL_TOKEN, res.access_token)
          localStorage.setItem(MAL_REFRESH_TOKEN, res.refresh_token)
          setIsAuthenticated(true)
        } catch (e) {
          console.error(`Fail to authenticate: ${e}`)
        } finally {
          navigate("/")
        }
      }

      exchangeToken()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authCode])

  return (
    authCode === null ? <Navigate to={"/"} /> : <PageLayout>
      <div>
        Processing authentication...
      </div>
    </PageLayout>
  )
}