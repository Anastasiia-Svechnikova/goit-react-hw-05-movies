
import { useEffect, useState } from "react"

import { API } from "services/api.services";
import { Container } from "components/Container/Container";
import { MovieList } from "components/Movie-list/Movie-list";


 const Home = () => {
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
export default Home;