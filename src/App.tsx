import { BrowserRouter, Route, Routes } from "react-router-dom"
import SideNavBar from "./components/SideNavBar"
import { AuthProvider } from "./context/AuthContext"
import { HOME_PATH } from "./constants/paths"
import HomePage from "./pages/HomePage"

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-background h-screen w-screen text-content-color">
          <div className="flex size-full py-6">
            <div className="ps-8">
              <SideNavBar />
            </div>
            <Routes>
              <Route 
                index
                path={HOME_PATH}
                element={<HomePage />}
              />
            </Routes>
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}