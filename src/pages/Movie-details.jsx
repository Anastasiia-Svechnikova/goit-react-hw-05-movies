import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "services/api.services";
import { MovieItem } from "components/Movie-item/Movie-item"

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null)
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState('idle')
    
    const { id } = useParams();
    console.log(id)


    useEffect(() => {

        API.getMovieById(id).then((res) => {
            console.log(res)
            setMovie(res)
            setStatus('resolved')
        }).catch((err) => {
            setErrorMessage("Oops, smth went wrong..")
            setStatus('rejected')
            console.log(err.message)
      } )

    }, [id])
    

    return (
        <>
            {status === 'resolved' && <MovieItem movie={movie} />}
            {status === 'rejected' && <p>{errorMessage}</p>}
        </>
        
    )
}