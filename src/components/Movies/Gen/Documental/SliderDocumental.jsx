import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderDocumental = ({ peliculasDocumental }) => {
    console.log(peliculasDocumental)

    const imagenDocumental = peliculasDocumental.map((peliculaDocumental) => (
        <SwiperSlide key={peliculaDocumental.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaDocumental.poster_path}`}
                alt={peliculaDocumental.title}
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
            {imagenDocumental}
        </Swiper>
    )
}

export default SliderDocumental
