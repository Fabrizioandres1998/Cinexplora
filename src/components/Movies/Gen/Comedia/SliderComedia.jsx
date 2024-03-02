import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderComedia = ({ peliculasComedia }) => {   

    const imagenComedia = peliculasComedia.map((peliculaComedia) => (
        <SwiperSlide key={peliculaComedia.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaComedia.poster_path}`}
                alt={peliculaComedia.title}
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
            {imagenComedia}
        </Swiper>
    )
}

export default SliderComedia
