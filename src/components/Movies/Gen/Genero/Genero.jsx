import { useEffect, useState } from 'react'
import InfoPeliculaGenero from './InfoPeliculaGenero'
import SliderGenero from './SliderGenero'
import SliderAccion from '../Accion/SliderAccion'

const Genero = () => {
    const [peliculasGenero, setpeliculasGenero] = useState([])
    const [generoID, setGeneroID] = useState('')

    useEffect(() => {
        const APIkey = '7f084ba9c7318f8925458bd9753330de'
        const APIurl = 'https://api.themoviedb.org/3/discover/movie'
        const totalPages = 1

        const fetchData = async (page) => {
            const URLtmdb = `${APIurl}?api_key=${APIkey}&language=es-US&sort_by=popularity.desc&page=${page}&with_genres=${generoID}`
            try {
                const resp = await fetch(URLtmdb)
                const data = await resp.json()
                return data.results
            } catch (error) {
                console.error(`Error al obtener datos de la página ${page}:`, error)
                return []
            }

        }
        

        const fetchAllPages = async () => {
            let allResults = []

            for (let page = 1; page <= totalPages; page++) {
                const results = await fetchData(page)
                allResults = [...allResults, ...results]
            }

            setpeliculasGenero(allResults)
            
        }

        
        fetchAllPages()
        
    }, [generoID])
    console.log(peliculasGenero)
    return (
        <>
        <h1>Accion</h1>
            <SliderAccion peliculasGenero={peliculasGenero} setGeneroID={setGeneroID} generoID={28} />
        </>
    )
}

export default Genero
