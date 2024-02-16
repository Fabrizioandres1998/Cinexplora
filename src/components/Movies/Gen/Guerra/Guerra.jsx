import { useEffect, useState } from 'react'
import SliderGuerra from './SliderGuerra'



const Guerra = () => {
    const [peliculasGuerra, setPeliculasGuerra] = useState([])

    useEffect(() => {
        const APIkey = '7f084ba9c7318f8925458bd9753330de'
        const APIurl = 'https://api.themoviedb.org/3/discover/movie'
        const totalPages = 10

        const fetchData = async (page) => {
            const URLtmdb = `${APIurl}?api_key=${APIkey}&language=es-US&sort_by=popularity.desc&page=${page}&with_genres=${10752}`
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

            setPeliculasGuerra(allResults)
        }


        fetchAllPages()
    }, [])

    return (
        <>
            <h1>Guerra</h1>
            <SliderGuerra peliculasGuerra={peliculasGuerra} />
        </>
    )
}

export default Guerra
