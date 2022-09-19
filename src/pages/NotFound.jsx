import { StyledLink, StyledText } from "./pages.styled/NotFound";
import { Container } from "components/Container/Container";

 const NotFound = () => {
    return (
        <Container>
            <StyledText>Unfortunately, this page doesn't exist.</StyledText>
            <StyledLink to="/">Go back to Home page</StyledLink>
        </Container>
    )
 }
export default NotFound