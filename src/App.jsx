
import NavbarBT from "./components/Navbar/NavbarBT"
import Movies from "./components/Movies/Movies"
import '/styles.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Accion from "./components/Movies/Gen/Accion/Accion"
import Videos from "./components/Movies/Videos"
import InfoPeliculaAccion from "./components/Movies/Gen/Accion/InfoPeliculaAccion"


function App() {

  return (
      <BrowserRouter>
        <NavbarBT />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/accion" element={<Accion />} />
          <Route path="videos" element={<Videos />} />
          <Route path="pelicula/:id/:title" element={<InfoPeliculaAccion />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App