import { NavLink, Outlet} from "react-router-dom";
import styled from "styled-components";


const StyledLink = styled(NavLink)`
  padding: 30px;

  font-size: 20px;
  color: black;
  text-decoration: none;

  &.active {
    color: #952f2f;
  }
  .active:not{
    color: black;
  }
`;
const NavBar = styled("nav") `
    display: flex;
    border-bottom: 1px solid black;

`


export const SharedLayout = () => {
    return (
        <header>
            <NavBar>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies" >Movies</StyledLink>
            </NavBar>
            <Outlet/>
        </header>
    )
}