import { Outlet} from "react-router-dom";
import { NavBar, StyledLink } from "./Shared-layout.styled";

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