import styled from "styled-components";

const List = styled("ul")`
    padding: 0;
    list-style: none;
`
const ListItem = styled('li')`
    padding: 5px 10px;
`

export const MovieList = ({ movies }) => {

        const elements = movies.map(({ name,title, id }) => <ListItem key={id}>{name || title}</ListItem>)
    return (
        <List>
            {elements}
        </List>
    )
}
