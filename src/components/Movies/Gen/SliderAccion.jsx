import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderAccion = ({ peliculasAccion }) => {
    console.log(peliculasAccion)

    const imagenAccion = peliculasAccion.map((peliculaAccion) => (
        <SwiperSlide key={peliculaAccion.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaAccion.poster_path}`}
                alt={peliculaAccion.title}
            />
        </SwiperSlide>
    ))


    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            {imagenAccion}
        </Swiper>
    )
}

export default SliderAccion
