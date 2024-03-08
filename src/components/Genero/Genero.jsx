import { useEffect, useState } from 'react'
import InfoPeliculaGenero from './InfoPeliculaGenero'
import SliderGenero from './SliderGenero'


const Genero = () => {
    const [GenerosID, setGenerosID] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjA4NGJhOWM3MzE4Zjg5MjU0NThiZDk3NTMzMzBkZSIsInN1YiI6IjY1YzZhODAzMjY2Nzc4MDE3YzU3MDU1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.blNSpRF--oby97eSqINXg6lcKTfd_iOSUMXJBvhMLEI'
            }
        };

        fetch('https://api.themoviedb.org/3/genre/movie/list?language=es', options)
            .then(response => response.json())
            .then(response => setGenerosID(response.genres))
            .catch(err => console.error(err));

    }, [])
    // console.log(GenerosID)

    return (
        <>
            {GenerosID.map((GeneroID) => (
                <SliderGenero GeneroID={GeneroID.id} generoIDName={GeneroID.name} key={GeneroID.id} />
            ))}

        </>
    )
}

export default Genero
