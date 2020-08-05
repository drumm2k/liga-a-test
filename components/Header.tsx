import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: ${(p) => p.theme.color.accent};
  margin: ${(p) => p.theme.spacing.s12} 0;
`;

const Header = () => (
  <StyledHeader>
    <Logo>Liga-A</Logo>
    <Nav />
  </StyledHeader>
);

export default Header;
