import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderDrama = ({ peliculasDrama }) => {

    const imagenDrama = peliculasDrama.map((peliculaDrama) => (
        <SwiperSlide key={peliculaDrama.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaDrama.poster_path}`}
                alt={peliculaDrama.title}
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
            {imagenDrama}
        </Swiper>
    )
}

export default SliderDrama
