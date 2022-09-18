import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchForm } from "components/Search-form/Search-form"
import { API } from "services/api.services";
import { MovieList } from "components/Movie-list/Movie-list";



export const Movies = () => {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

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
        setQuery(newQuery);
    }

    return (
        <main>
            <SearchForm onSubmit={handleFormSubmit} />
            {errorMessage?<p>{errorMessage}</p> : <MovieList movies={movies} />}           
            <ToastContainer
                hideProgressBar={true}
                theme="dark" />
        </main>
    )
}