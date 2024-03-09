import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


const InfoPeliculaGenero = ({ peliculaGenero }) => {

    const [trailer, setTrailer] = useState([])
    const { id } = useParams()

    useEffect(() => {
    
        const fetchData = async () => {
            if (id) {
                const APIkey = '7f084ba9c7318f8925458bd9753330de';
                const APIurl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${APIkey}&language=es`;

                try {
                    const resp = await fetch(APIurl);
                    const data = await resp.json();
                    if (!data.results || data.results.length === 0) {
                        const URLtmdbEN = `${APIurl}${id}/videos?api_key=${APIkey}&language=en`
                        const respEN = await fetch(URLtmdbEN)
                        const dataEN = await respEN.json()

                        setTrailer(dataEN.results)
                    }
                    if (!data.results || data.results.length === 0) {
                    } else {
                        setTrailer(data.results);
                    }
                } catch (error) {
                    console.error('Error al obtener datos:', error);
                }
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    

    console.log({ peliculaGenero })
    return (
        <div>
            {trailer && trailer.length > 0 && trailer[0].key && (
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
    )
}

export default InfoPeliculaGenero
