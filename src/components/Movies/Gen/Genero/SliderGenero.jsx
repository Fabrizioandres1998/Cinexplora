import React from 'react'
import { useState, useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderGenero = ({ GeneroID }) => {
    const [peliculasGenero, setpeliculasGenero] = useState([])

    const APIkey = '7f084ba9c7318f8925458bd9753330de'
    const APIurl = 'https://api.themoviedb.org/3/discover/movie'
    const totalPages = 1

    useEffect(() => {
        const fetchData = async (page) => {
            const URLtmdb = `${APIurl}?api_key=${APIkey}&language=es-US&sort_by=popularity.desc&page=${page}&with_genres=${GeneroID}`
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
    }, [])

    const imagenAccion = peliculasGenero.map((peliculaGenero) => (
        <SwiperSlide key={peliculaGenero.id}>
            {/* <Link to={`/pelicula/${peliculaGenero.id}/${encodeURIComponent(peliculaGenero.title)}`}> */}
                <img
                    src={`https://image.tmdb.org/t/p/w500${peliculaGenero.poster_path}`}
                    alt={peliculaGenero.title}
                />
            {/* </Link> */}

        </SwiperSlide>
    ))

return (
    <>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={4}
            navigation>
            {imagenAccion}
        </Swiper>
    </>
)
}
export default SliderGenero


