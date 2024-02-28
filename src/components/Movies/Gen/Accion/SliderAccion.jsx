import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, NavLink } from "react-router-dom"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderAccion = ({ peliculasAccion }) => {

    const imagenAccion = peliculasAccion.map((peliculaAccion) => (
        <SwiperSlide key={peliculaAccion.id}>
            <Link to={`/pelicula/${peliculaAccion.id}/${encodeURIComponent(peliculaAccion.title)}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${peliculaAccion.poster_path}`}
                    alt={peliculaAccion.title}
                />
            </Link>
        </SwiperSlide>
    ));

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={4}
            navigation
        >
            {imagenAccion}
        </Swiper>
    );
}

export default SliderAccion;