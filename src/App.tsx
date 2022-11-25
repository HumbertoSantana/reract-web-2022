import { Route, Routes } from "react-router-dom"
import MainLayout from "./screens/Layout/MainLayout/MainLayout"
import WelcomeScreen from "./screens/Welcome/WelcomeScreen/WelcomeScreen"
import { ROUTES } from "./utils/enums/routes"

function App() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<MainLayout />} >
        <Route index element={<WelcomeScreen />}/>
      </Route>
    </Routes>
  )
}

export default App
