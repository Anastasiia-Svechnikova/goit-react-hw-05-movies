import { useState, useEffect } from "react";
import { API } from "services/api.services";
import { useParams } from "react-router-dom";
import { Container } from "components/Container/Container";
import { CastList } from "components/Cast/CastList";


 const Cast = () => {
    const [cast, setCast] = useState(null);
    const [status, setStatus] = useState('idle');
        const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams()
    console.log(id)

    useEffect(() => {

        API.getMovieById(id, '/credits').then((res) => {
            setCast(res.cast)
            setStatus('resolved')
        }).catch((err) => {
            setErrorMessage("Oops, smth went wrong..")
            setStatus('rejected')
            console.log(err.message)
        })

        


    }, [id])

console.log(cast)

    return (
        <Container>
            {status === 'resolved' && <CastList cast={cast} />}
            {status === 'rejected' && <p>{errorMessage}</p>}
        </Container>
        
    )
 }
export default Cast;