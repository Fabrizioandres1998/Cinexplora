import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderHistoria = ({ peliculasHistoria }) => {
    console.log(peliculasHistoria)

    const imagenHistoria = peliculasHistoria.map((peliculaHistoria) => (
        <SwiperSlide key={peliculaHistoria.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaHistoria.poster_path}`}
                alt={peliculaHistoria.title}
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
            {imagenHistoria}
        </Swiper>
    )
}

export default SliderHistoria
