
import { useEffect, useState } from "react"
import { API } from "services/api.services";
import { Container } from "components/Container/Container";
import { MovieList } from "components/Movie-list/Movie-list";

// API.getMovie(105248, '/credits').then((res) => console.log('credits', res));
// API.getMovie(105248, 'details').then((res) => console.log('det', res));
// API.getMovie(105248, '/reviews').then((res) => console.log('reviews', res));



export const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([])

    useEffect(() => {
        API.getTrending().then((res) => {
            setTrendingFilms(res.results)
        }).catch((err)=>{console.log(err.message)})
    }, [])


    return (
        <main>
            <Container>
                <h1>Trending Today</h1>
            <MovieList movies={trendingFilms}/>
            </Container>
            
        </main>
    )
}