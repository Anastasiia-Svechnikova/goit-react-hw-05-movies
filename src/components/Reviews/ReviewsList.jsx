import { List, ListItem, Text } from "./ReviewsList.styled"

export const ReviewsList = ({ reviews }) => {
    
    const elements = reviews.map(({ content, id, author }) => (
        
        <ListItem key={id}>
           
            <h4>Author: {author}</h4>
            <Text> { content}</Text>
        </ListItem>)
        )
    
    return (
        <List>
            {elements}
        </List>
    )
}