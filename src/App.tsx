import './App.css'
import {useSelector} from "react-redux"
import {RootState} from "./redux/store"
import {BrowserRouter as Router} from "react-router-dom"
import Navbar from "./components/Navbar"
import AllRoutes from "./router"

function App() {
    const theme = useSelector((state: RootState) => state.theme);

  return (
<Router >
    <div className={theme.darkTheme ? 'dark-theme' : 'light-theme'}>
        <Navbar />
        <AllRoutes />
    </div>
</Router>
  )
}

export default App
