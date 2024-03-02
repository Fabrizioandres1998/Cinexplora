
import NavbarBT from "./components/Navbar/NavbarBT"
import Movies from "./components/Movies/Movies"
import '/styles.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
// import Accion from "./components/Movies/Gen/Accion/Accion"
import InfoPeliculaAccion from "./components/Movies/Gen/Accion/InfoPeliculaAccion"
import Genero from "./components/Movies/Gen/Genero/Genero"


function App() {

  return (
      <BrowserRouter>
        <NavbarBT />
        <Genero/>
        <Routes>
          <Route path="/" element={<Movies />} />
          {/* <Route path="/accion" element={<Accion />} /> */}
          {/* <Route path="pelicula/:id/:title" element={<InfoPeliculaAccion />} /> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App