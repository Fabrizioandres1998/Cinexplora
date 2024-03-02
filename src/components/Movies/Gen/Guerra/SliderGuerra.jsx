import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderGuerra = ({ peliculasGuerra }) => {

    const imagenGuerra = peliculasGuerra.map((peliculaGuerra) => (
        <SwiperSlide key={peliculaGuerra.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaGuerra.poster_path}`}
                alt={peliculaGuerra.title}
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
            {imagenGuerra}
        </Swiper>
    )
}

export default SliderGuerra
