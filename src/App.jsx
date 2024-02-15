
import NavbarBT from "./components/Navbar/NavbarBT"
import Movies from "./components/Movies/Movies"
import '/styles.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accion from "./components/Movies/Gen/Accion"

function App() {

  return (
    <BrowserRouter>
      <NavbarBT />
      <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/accion" element={<Accion/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App