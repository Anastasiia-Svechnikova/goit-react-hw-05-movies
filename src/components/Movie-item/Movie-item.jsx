import { Link, Outlet } from 'react-router-dom';
import { Suspense } from "react";

export const MovieItem = ({ movie }) => {
  const {name, title, genres, poster_path, vote_average, overview, release_date} = movie

    const extractedGenres = genres.map(({ name, id }) => <li key={id}>{name}</li>)
    
    return (
        <>
            <div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name || title}/>
                </div>
                <div>
                    <h2>{name || title}<span> { `(${release_date.slice(0, 4)})`}</span></h2>
                    <p>User Score: { Math.floor(vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{ overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {extractedGenres}
                    </ul>
                </div>
            </div>
            <div>
                <p>Additional info</p>
                <ul>
                    <li>
                        <Link  to="cast">Cast</Link>
                    </li>
                    <li><Link  to="reviews">Reviews</Link></li>
                </ul>
            </div>
            <Suspense fallback={<div>Loading page...</div>}>
            <Outlet/>
            </Suspense>
            
</>
    )
}