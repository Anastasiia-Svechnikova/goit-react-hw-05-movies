export const CastList = ({ cast }) => {
    
    const elements = cast.map(({ character, profile_path, name, id }) => (
        
        <li key={id}>
            {profile_path && <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />}
            <p>{name}</p>
            <p>Character: { character}</p>
        </li>)
        )
    
    return (
        <ul>
            {elements}
        </ul>
    )
}