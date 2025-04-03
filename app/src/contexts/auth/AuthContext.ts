import { createContext, useContext } from "react"
import { AuthContextProps } from "./AuthProvider"

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {}
})

export default function useAuth() {
  return useContext<AuthContextProps>(AuthContext)
}