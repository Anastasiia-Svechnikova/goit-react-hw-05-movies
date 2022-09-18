import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

import { API } from "services/api.services";
import { MovieItem } from "components/Movie-item/Movie-item";
import { Container } from "components/Container/Container";

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState('idle');
    
    const { id } = useParams();
    const location = useLocation();
    console.log(location)
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
        })

        


    }, [id])
    

    return (
        <Container>
            <Link to={location.state?.from ?? '/movies' }>Go back</Link>
            {status === 'resolved' && <MovieItem movie={movie} />}
            {status === 'rejected' && <p>{errorMessage}</p>}
        </Container>
        
    )
}