import { useContext, useState } from "react"
import { createContext } from "react"
import { JSX } from "react"

interface AuthContextProps {
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false
})

interface AuthProviderProps {
  children: JSX.Element
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext<AuthContextProps>(AuthContext)
}