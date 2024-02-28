import Accion from "./Gen/Accion/Accion"
import Animacion from "./Gen/Animacion/Animacion"
import Aventura from "./Gen/Aventura/Aventura"
import CienciaFiccion from "./Gen/Ciencia ficcion/CienciaFiccion"
import Comedia from "./Gen/Comedia/Comedia"
import Crimen from "./Gen/Crimen/Crimen"
import Documental from "./Gen/Documental/Documental"
import Drama from "./Gen/Drama/Drama"
import Fantasia from "./Gen/Fantasia/Fantasia"
import Guerra from "./Gen/Guerra/Guerra"
import Historia from "./Gen/Historia/Historia"
import Misterio from "./Gen/Misterio/Misterio"
import Musica from "./Gen/Musica/Musica"
import PeliculasTv from "./Gen/Peliculas de TV/PeliculasTv"
import Romance from "./Gen/Romance/Romance"
import Terror from "./Gen/Terror/Terror"
import Thriller from "./Gen/Thriller/Thriller"
import Western from "./Gen/Western/Western"

const Movies = () => {

    return (
        <>
            <Accion />
            <Animacion />
            <Documental />
            <Terror />

            <Western />
            <Romance />
            <Aventura />
            <CienciaFiccion />
            <Comedia />
            <Crimen />
            <Drama />
            <Fantasia />
            <Guerra />
            <Historia />
            <Misterio />
            <Musica />
            <PeliculasTv />
            <Thriller />
        </>
    )
}

export default Movies
