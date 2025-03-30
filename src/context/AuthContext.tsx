import { useContext, useState } from "react"
import { createContext } from "react"
import { JSX } from "react"

interface AuthContextProps {
  isAuthenticated: boolean,
  setIsAuthenticated: (val: boolean) => void
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {}
})

interface AuthProviderProps {
  children: JSX.Element
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
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

export function useAuth() {
  return useContext<AuthContextProps>(AuthContext)
}