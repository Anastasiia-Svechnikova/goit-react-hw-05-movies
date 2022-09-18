import { StyledLink, StyledText } from "./pages.styled/NotFound";
import { Container } from "components/Container/Container";

export const NotFound = () => {
    return (
        <Container>
            <StyledText>Unfortunately, this page doesn't exist any more.</StyledText>
            <StyledLink to="/">Go back to Home page</StyledLink>
        </Container>
    )
}