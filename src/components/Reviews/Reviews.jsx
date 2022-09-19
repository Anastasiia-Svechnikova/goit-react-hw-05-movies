import { useState, useEffect } from "react";
import { API } from "services/api.services";
import { useParams } from "react-router-dom";
import { Container } from "components/Container/Container";
import { ReviewsList } from "./ReviewsList";



 const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [status, setStatus] = useState('idle');
        const [errorMessage, setErrorMessage] = useState('');
    const { id } = useParams()
    console.log(id)

    useEffect(() => {

        API.getMovieById(id, '/reviews').then((res) => {
            if (!res.results.length) {
                setStatus('not found')
                return;
            }
            setReviews(res.results)
            setStatus('resolved')
        }).catch((err) => {
            setErrorMessage("Oops, smth went wrong..")
            setStatus('rejected')
            console.log(err.message)
        })

        


    }, [id])

console.log(reviews)

    return (
        <Container>
            {status === 'not found' && <p>No reviews</p>}
            {status === 'resolved' && <ReviewsList reviews={reviews} />}
            {status === 'rejected' && <p>{errorMessage}</p>}
        </Container>
        
    )
 }
export default Reviews;