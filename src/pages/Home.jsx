// import styled from "styled-components";
import { useEffect, useState } from "react"
import { getTrending } from "services/api.services";
import { Container } from "components/Container";
import { MovieList } from "components/Movie-list";



export const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([])
    
    useEffect(() => {
        getTrending().then((res) => {
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