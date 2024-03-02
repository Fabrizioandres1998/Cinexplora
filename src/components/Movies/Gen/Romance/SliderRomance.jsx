import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderRomance = ({ peliculasRomance }) => {

    const imagenRomance = peliculasRomance.map((peliculaRomance) => (
        <SwiperSlide key={peliculaRomance.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaRomance.poster_path}`}
                alt={peliculaRomance.title}
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
        >
            {imagenRomance}
        </Swiper>
    )
}

export default SliderRomance
