import styled from "styled-components";
import { NavLink} from "react-router-dom";


export const StyledLink = styled(NavLink)`
  padding: 30px;

  font-size: 20px;
  color: black;
  text-decoration: none;

  &.active {
    color: #952f2f;
  }
  /* .active:not{
    color: black;
  } */
`;
export const NavBar = styled("nav") `
    display: flex;
    border-bottom: 1px solid black;

`
