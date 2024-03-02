import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderCrimen = ({ peliculasCrimen }) => {

    const imagenCrimen = peliculasCrimen.map((peliculaCrimen) => (
        <SwiperSlide key={peliculaCrimen.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaCrimen.poster_path}`}
                alt={peliculaCrimen.title}
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
            {imagenCrimen}
        </Swiper>
    )
}

export default SliderCrimen
