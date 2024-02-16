import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderFamilia = ({ peliculasFamilia }) => {
    console.log(peliculasFamilia)

    const imagenFamilia = peliculasFamilia.map((peliculaFamilia) => (
        <SwiperSlide key={peliculaFamilia.id}>
            <img
                src={`https://image.tmdb.org/t/p/w500${peliculaFamilia.poster_path}`}
                alt={peliculaFamilia.title}
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
            {imagenFamilia}
        </Swiper>
    )
}

export default SliderFamilia
