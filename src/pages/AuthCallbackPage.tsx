import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import PageLayout from "../layouts/PageLayout"
import { useEffect } from "react"
import { malAuthService } from "../services"
import { useAuth } from "../context/AuthContext"
import { TOKEN } from "../constants/storageKeys"

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
          localStorage.setItem(TOKEN, JSON.stringify(res))
          setIsAuthenticated(true)
        } catch (e) {
          console.error(`Fail to authenticate: ${e}`)
        } finally {
          navigate("/")
        }
      }

      exchangeToken()
    }
  }, [])

  return (
    authCode === null ? <Navigate to={"/"} /> : <PageLayout>
      <div>
        Processing authentication...
      </div>
    </PageLayout>
  )
}