import { JSX, useState } from "react"
import { MAL_TOKEN } from "../../constants/storageKeys"
import { AuthContext } from "./AuthContext"

export interface AuthContextProps {
  isAuthenticated: boolean,
  setIsAuthenticated: (val: boolean) => void
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !(!localStorage.getItem(MAL_TOKEN))
  )
  
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        setIsAuthenticated: setIsAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

interface AuthProviderProps {
  children: JSX.Element
}