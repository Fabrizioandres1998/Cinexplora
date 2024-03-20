import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SliderByGenres = ({ movies, genres }) => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <>
            {movies.map((moviesData, index) => {
                const shuffledMovies = shuffleArray(moviesData.results);
                return (
                    <div key={index}>
                        <h2>{genres[index].name}</h2>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={5}
                            slidesPerView={5}
                            navigation
                        >
                            {shuffledMovies.map(movie => (
                                <SwiperSlide key={movie.id}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                        alt={movie.title}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                );
            })}
        </>
    );
}

export default SliderByGenres;
