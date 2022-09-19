import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from "react-router-dom";
import { Container } from "components/Container/Container";
import { SearchForm } from "components/Search-form/Search-form"
import { API } from "services/api.services";
import { MovieList } from "components/Movie-list/Movie-list";



 const Movies = () => {

    const [movies, setMovies] = useState([])
     const [errorMessage, setErrorMessage] = useState('')
     
      const [searchParams, setSearchParams] = useSearchParams();
     const query = searchParams.get('query');
     console.log(query)
     
     useEffect(() => {
        
        if (query) {
            API.getSearchMovies(query).then((res) => {
                if (!res.results.length) {
                    toast.error("It seems like there's been nothing found. Try again, please")
                    return;
                }
                setMovies(res.results)
                console.log(res.results)

            }).catch((err) => {
                setErrorMessage("Oops, smth went wrong..")
                console.log(err)
            })
        }
    }, [query])


    const handleFormSubmit = (newQuery) => {
        setSearchParams({query: newQuery })
    }

    return (
        <main>
            <Container>

            <SearchForm onSubmit={handleFormSubmit} />
            {errorMessage?<p>{errorMessage}</p> : <MovieList movies={movies} />}           
            <ToastContainer
                hideProgressBar={true}
                theme="dark" />
            </Container>
        </main>
    )
 }
export default Movies;