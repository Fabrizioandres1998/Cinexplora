import React, { useEffect, useState } from 'react';

const Videos = () => {
    const [movieInfo, setMovieInfo] = useState({});
    const [videoInfo, setVideoInfo] = useState([]);

    useEffect(() => {
        const APIkey = '7f084ba9c7318f8925458bd9753330de';
        const movieId = 150; // ID de la película (ajusta según tus necesidades)
        const APIurl = 'https://api.themoviedb.org/3/movie/';

        const fetchData = async () => {
            try {
                // Hacer una solicitud para obtener detalles de la película
                const movieResponse = await fetch(
                    `${APIurl}${movieId}?api_key=${APIkey}`
                );
                const movieData = await movieResponse.json();
                setMovieInfo(movieData);

                // Hacer otra solicitud para obtener información de videos específicos para esa película
                const videoResponse = await fetch(
                    `${APIurl}${movieId}/videos?api_key=${APIkey}`
                );
                const videoData = await videoResponse.json();
                setVideoInfo(videoData.results);
            } catch (error) {
                console.error('Error al obtener datos de la página', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Renderizar información general de la película aquí */}
            <h1>{movieInfo.title}</h1>
            <p>{movieInfo.overview}</p>

            {/* Renderizar el primer video con un iframe */}
            {videoInfo.length > 0 && (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoInfo[0].key}`}
                    title={videoInfo[0].name}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}

            {/* Renderizar información de todos los videos (opcional) */}
            {videoInfo.map((video) => (
                <div key={video.id}>
                    <h2>{video.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default Videos;
