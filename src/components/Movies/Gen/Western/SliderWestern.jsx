import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderWestern = ({ peliculasWestern }) => {

    const imagenWestern = peliculasWestern.map((peliculaWestern) => (
        <SwiperSlide key={peliculaWestern.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaWestern.poster_path}`}
                alt={peliculaWestern.title}
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
            {imagenWestern}
        </Swiper>
    )
}

export default SliderWestern
