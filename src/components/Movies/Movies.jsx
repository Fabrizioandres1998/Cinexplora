import Accion from "./Gen/Accion/Accion"
import Animacion from "./Gen/Animacion/Animacion"
import Aventura from "./Gen/Aventura/Aventura"
import CienciaFiccion from "./Gen/Ciencia ficcion/CienciaFiccion"
import Comedia from "./Gen/Comedia/Comedia"
import Crimen from "./Gen/Crimen/Crimen"
import Documental from "./Gen/Documental/Documental"
import Drama from "./Gen/Drama/Drama"
import Familia from "./Gen/Familia/Familia"
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
            <Animacion />
            <Documental />
            <Terror />
            <Accion />
            <Western />
            <Romance />
            <Aventura />
            <CienciaFiccion />
            <Comedia />
            <Crimen />
            <Drama />
            <Familia />
            <Fantasia />
            <Guerra />
            <Historia />
            <Misterio />
            <Musica />
            <PeliculasTv />
            <Romance />
            <Thriller />
            <Western />
        </>
    )
}

export default Movies
