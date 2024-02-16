import { useEffect, useState } from 'react'
import SliderCrimen from './SliderCrimen'



const Crimen = () => {
    const [peliculasCrimen, setPeliculasCrimen] = useState([])

    useEffect(() => {
        const APIkey = '7f084ba9c7318f8925458bd9753330de'
        const APIurl = 'https://api.themoviedb.org/3/discover/movie'
        const totalPages = 10

        const fetchData = async (page) => {
            const URLtmdb = `${APIurl}?api_key=${APIkey}&language=es-US&sort_by=popularity.desc&page=${page}&with_genres=${80}`
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

            setPeliculasCrimen(allResults)
        }


        fetchAllPages()
    }, [])

    return (
        <>
            <h1>Crimen</h1>
            <SliderCrimen peliculasCrimen={peliculasCrimen} />
        </>
    )
}

export default Crimen
