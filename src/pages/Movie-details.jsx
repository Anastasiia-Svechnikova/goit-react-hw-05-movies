import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "services/api.services";
import { MovieItem } from "components/Movie-item/Movie-item";
// import { Container } from "components/Container/Container";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState('idle');
    
    const { moviesId } = useParams();

    console.log(moviesId)

    useEffect(() => {

        API.getMovieById(moviesId).then((res) => {
            console.log(res)
            setMovie(res)
            setStatus('resolved')
        }).catch((err) => {
            setErrorMessage("Oops, smth went wrong..")
            setStatus('rejected')
            console.log(err.message)
        })

        


    }, [moviesId])
    

    return (
        <>
           
            {status === 'resolved' && <MovieItem movie={movie} />}
            {status === 'rejected' && <p>{errorMessage}</p>}
        </>
        
    )
}
export default MovieDetails;