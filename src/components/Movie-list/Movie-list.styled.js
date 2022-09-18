import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled("ul")`
    padding: 0;
    list-style: none;
`
 export const ListItem = styled('li')`
    padding: 5px 10px;
`
export const StyledLink = styled(Link)`
color: inherit;
text-decoration: none;
`