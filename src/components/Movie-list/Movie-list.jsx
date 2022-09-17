import { ListItem, List } from "./Movie-list.styled"

export const MovieList = ({ movies }) => {

        const elements = movies.map(({ name,title, id }) => <ListItem key={id}>{name || title}</ListItem>)
    return (
        <List>
            {elements}
        </List>
    )
}
