export const ReviewsList = ({ reviews }) => {
    
    const elements = reviews.map(({ content, id, author }) => (
        
        <li key={id}>
           
            <h4>Author: {author}</h4>
            <p> { content}</p>
        </li>)
        )
    
    return (
        <ul>
            {elements}
        </ul>
    )
}