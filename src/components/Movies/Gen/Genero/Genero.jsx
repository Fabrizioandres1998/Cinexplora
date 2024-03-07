import { useEffect, useState } from 'react'
import InfoPeliculaGenero from './InfoPeliculaGenero'
import SliderGenero from './SliderGenero'
import SliderAccion from '../Accion/SliderAccion'

const Genero = () => {
    const [GenerosID, setGenerosID] = useState([])
    // const [generoID, setGeneroID] = useState('')

    useEffect(() => {
        const APIkey = '7f084ba9c7318f8925458bd9753330de'
        const APIurl = 'https://api.themoviedb.org/3/genre/movie/list?language=en'

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjA4NGJhOWM3MzE4Zjg5MjU0NThiZDk3NTMzMzBkZSIsInN1YiI6IjY1YzZhODAzMjY2Nzc4MDE3YzU3MDU1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.blNSpRF--oby97eSqINXg6lcKTfd_iOSUMXJBvhMLEI'
            }
        };

        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
            .then(response => response.json())
            .then(response => setGenerosID(response.genres))
            .catch(err => console.error(err));

    }, [])
    console.log(GenerosID)
    // const asd =  GenerosID.map((GeneroID) => (
    //     console.log(GeneroID.name)
    // ))
    return (
        <>
        {GenerosID.map((GeneroID)=>(
            <SliderGenero GeneroID = {GeneroID.id} key={GeneroID.id}/>
        ))}
            
        </>
    )
}

export default Genero
