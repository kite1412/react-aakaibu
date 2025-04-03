import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SideNavBar from "./components/SideNavBar"
import { AUTH_CALLBACK_PATH, HOME_PATH } from "./constants/paths"
import { AuthProvider } from "./contexts/auth/AuthProvider"
import AuthCallbackPage from "./pages/AuthCallbackPage"
import HomePage from "./pages/HomePage"

const queryClient = new QueryClient()

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true)

  return (
    <BrowserRouter>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className="bg-background h-screen w-screen text-content-color overflow-hidden">
            <div className="flex size-full">
              <div className={`${showNavBar ? "ps-8" : "ps-6"} py-6`}>
                <SideNavBar 
                  visible={showNavBar}
                  onVisibleChange={setShowNavBar}
                  className={`${!showNavBar && "py-8"}`}
                />
              </div>
              <Routes>
                <Route 
                  index
                  path={HOME_PATH}
                  element={<HomePage />}
                />
                <Route 
                  path={AUTH_CALLBACK_PATH}
                  element={<AuthCallbackPage />}
                />
              </Routes>
            </div>
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}