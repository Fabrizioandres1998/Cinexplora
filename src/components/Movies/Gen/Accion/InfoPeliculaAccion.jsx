import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InfoPeliculaAccion = ({ peliculasAccion }) => {

    const [trailer, setTrailer] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const APIkey = '7f084ba9c7318f8925458bd9753330de'
        const APIurl = 'https://api.themoviedb.org/3/movie/';


        const fetchData = async () => {
            let URLtmdb = `${APIurl}${id}/videos?api_key=${APIkey}&language=es`

            try {
                const resp = await fetch(URLtmdb)
                const data = await resp.json()

                if (!data.results || data.results.length === 0) {
                    const URLtmdbEN = `${APIurl}${id}/videos?api_key=${APIkey}&language=en`
                    const respEN = await fetch(URLtmdbEN)
                    const dataEN = await respEN.json()

                    setTrailer(dataEN.results)
                } else {
                    setTrailer(data.results)
                }

            } catch (error) {
                console.error('error', error)
            }
        }

        fetchData()
    }, [id])

    return (
        <div>
            {trailer && trailer.length > 0 && (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailer[0].key}`}
                    title={trailer[0].name}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            )}

        </div>
    );
}

export default InfoPeliculaAccion;
