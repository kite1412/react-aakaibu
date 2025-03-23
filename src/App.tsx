import { BrowserRouter, Routes } from "react-router-dom"
import SideNavBar from "./components/SideNavBar"
import { AuthProvider } from "./context/AuthContext"

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-background h-screen w-screen text-content-color">
          <div className="py-6 ps-8 size-full">
            <SideNavBar />
          </div>
          <Routes>
            
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}