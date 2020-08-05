import type { AppProps } from 'next/app';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

const theme = {
  color: {
    white: '#fff',
    black: '#000',
  },
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
   font-size: 18px;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   font-weight: 400;
  }

  h1 {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default MyApp;
