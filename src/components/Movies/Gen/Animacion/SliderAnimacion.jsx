import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderAnimacion = ({ peliculasAnimacion }) => {
    console.log(peliculasAnimacion)

    const imagenAnimacion = peliculasAnimacion.map((peliculaAnimacion) => (
        <SwiperSlide key={peliculaAnimacion.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaAnimacion.poster_path}`}
                alt={peliculaAnimacion.title}
            />
        </SwiperSlide>
    ))


    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={5}
            slidesPerView={4}
            navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            {imagenAnimacion}
        </Swiper>
    )
}

export default SliderAnimacion
