import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

const theme = {
  color: {
    white: '#fff',
    black: '#000',
    accent: '#5e60ce',
    gray50: '#F6F6F6',
    gray100: '#EEEEEE',
    gray200: '#E2E2E2',
    gray300: '#CBCBCB',
    gray400: '#AFAFAF',
    gray500: '#757575',
    gray600: '#545454',
    gray700: '#333333',
    gray800: '#1F1F1F',
    gray900: '#141414',
  },
  spacing: {
    s0: '0',
    s1: '0.25rem',
    s2: '0.5rem',
    s3: '0.75rem',
    s4: '1rem',
    s5: '1.25rem',
    s6: '1.5rem',
    s8: '2rem',
    s10: '2.5rem',
    s12: '3rem',
    s16: '4rem',
    s20: '5rem',
  },
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    font-size: 10px;
  }

  body {
   font-size: 1.8rem;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
   font-weight: 400;
  }

  h1 {
    font-size: 2.8rem;
    line-height: 3.6rem;
  }
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
