import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, NavLink } from "react-router-dom"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Genero from '../Genero/Genero';
import { useEffect } from 'react';

const SliderAccion = ({ peliculasGenero, setGeneroID, generoID }) => {

    useEffect(() => {
        setGeneroID(28)
    }, []);

    console.log(peliculasGenero)
    const imagenAccion = peliculasGenero.map((peliculaGenero) => (
        <SwiperSlide key={peliculaGenero.id}>
            <Link to={`/pelicula/${peliculaGenero.id}/${encodeURIComponent(peliculaGenero.title)}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${peliculaGenero.poster_path}`}
                    alt={peliculaGenero.title}
                />
            </Link>

        </SwiperSlide>

    ));

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={5}
                slidesPerView={4}
                navigation
            >
                {imagenAccion}
            </Swiper>
        </>
    );
}

export default SliderAccion;