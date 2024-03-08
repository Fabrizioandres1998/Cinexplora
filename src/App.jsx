
import NavbarBT from "./components/Navbar/NavbarBT"
import '/styles.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Genero from "./components/Genero/Genero"
import InfoPeliculaGenero from "./components/Genero/InfoPeliculaGenero"


function App() {

  return (
    <BrowserRouter>
      <NavbarBT />
      
      <Routes>
        <Route path="/" element={<Genero />} />
        <Route path="/:id/:title" element={<InfoPeliculaGenero />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App