import styled from 'styled-components';

const Logo = styled.h1`
  color: ${(p) => p.theme.color.accent};
  margin: ${(p) => p.theme.spacing.s12} 0;
`;

const Header = () => (
  <header>
    <Logo>Liga-A Test</Logo>
  </header>
);

export default Header;
