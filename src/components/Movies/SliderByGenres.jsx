import React, { useState, useEffect } from 'react';
import { Navigation, Pagination, Autoplay, A11y, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';

const SliderBymoviesGenres = ({ movies, moviesGenres }) => {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [shuffledMovies, setShuffledMovies] = useState([]);

    useEffect(() => {
        if (movies && movies.length > 0 && !dataLoaded) {
            const shuffledData = movies.map(movieData => shuffleArray(movieData.results));
            setShuffledMovies(shuffledData);
            setDataLoaded(true);
        }
    }, [movies, dataLoaded]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <>
            {shuffledMovies.map((shuffledData, index) => (
                <div key={index} className='fondo'>
                    <h2>{moviesGenres[index].name}</h2>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'3'}
                        loop={true}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {shuffledData.map(movie => (
                            <SwiperSlide key={movie.id} className='swiper-slide'>
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </>
    );
}

export default SliderBymoviesGenres;
