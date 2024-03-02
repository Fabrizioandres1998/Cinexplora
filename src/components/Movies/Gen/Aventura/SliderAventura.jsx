import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderAventura = ({ peliculasAventura }) => {


    const imagenAventura = peliculasAventura.map((peliculaAventura) => (
        <SwiperSlide key={peliculaAventura.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaAventura.poster_path}`}
                alt={peliculaAventura.title}
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
            {imagenAventura}
        </Swiper>
    )
}

export default SliderAventura
