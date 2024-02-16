import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderMusica = ({ peliculasMusica }) => {
    console.log(peliculasMusica)

    const imagenMusica = peliculasMusica.map((peliculaMusica) => (
        <SwiperSlide key={peliculaMusica.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaMusica.poster_path}`}
                alt={peliculaMusica.title}
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
            {imagenMusica}
        </Swiper>
    )
}

export default SliderMusica
