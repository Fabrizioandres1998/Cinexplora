import { useEffect, useState } from 'react';
import SliderByGenres from './SliderByGenres';

const GetMovies = () => {

    const [movies, setMovies] = useState([]);
    const [moviesGenres, setMoviesGenres] = useState([]);

    const APIurl = 'https://api.themoviedb.org/3/discover/movie'
    const APIkey = '7f084ba9c7318f8925458bd9753330de'
    const APIurlGenres = 'https://api.themoviedb.org/3/genre/movie/list'

    useEffect(() => {

        const fetchMovies = async () => {
            const TMDBurlGenres = `${APIurlGenres}?api_key=${APIkey}&language=es`

            try {
                const genresResponse = await fetch(TMDBurlGenres);
                const genresData = await genresResponse.json();
                setMoviesGenres(genresData.genres);

                const requests = genresData.genres.map(async (genre) => {
                    const TMDBurl = `${APIurl}?api_key=${APIkey}&language=es-US&sort_by=popularity.desc&page=${1}&with_genres=${genre.id}`
                    const response = await fetch(TMDBurl);
                    const data = await response.json();
                    return data;
                });

                const moviesData = await Promise.all(requests);
                setMovies(moviesData);

            } catch (error) {
                console.error('Error al obtener géneros o películas:', error);
            }
        }

        fetchMovies()
    }, [])
    

    return (
        <>
            <SliderByGenres movies={movies} moviesGenres={moviesGenres} />

        </>
    );
}
export default GetMovies;

