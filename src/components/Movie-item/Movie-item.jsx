
// import { useEffect, useState } from "react";

export const MovieItem = ({ movie }) => {
  const {name, title, genres, poster_path, id, vote_average, overview, release_date} = movie
    console.log(genres)
    const extractedGenres = genres.map(({ name, id }) => <li key={id}>{name}</li> )
    console.log(extractedGenres)
    return (
        <>
            <div>
                {/* info wrapper */}
                <div>
                    {/* img thumb */}
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name || title}/>
                </div>
                <div>
                    {/* {info} */}
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
                {/* navigation */}
                <p>Additional info</p>
                <ul>
                    <li>Cast { id}</li>
                    <li>Reviews</li>
                </ul>
            </div>
            
</>
    )
}