import { ListItem, List, StyledLink } from "./Movie-list.styled"


export const MovieList = ({ movies }) => {

    const elements = movies.map(({ name, title, id }) => <ListItem key={id}>
        <StyledLink to={`/movies/${id}`} >{name || title}</StyledLink>       
    </ListItem>)
    
    return (
        <List>
            {elements}
        </List>
    )
}
