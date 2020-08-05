import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

const theme = {
  font: {
    weight: {
      normal: '400',
      bold: '700',
    },
    size: {
      xss: '1.2rem',
      xs: '1.4rem',
      sm: '1.6rem',
      md: '1.8rem',
      lg: '2rem',
      xl: '2.4rem',
    },
  },
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
  border: {
    border100: 'solid 1px hsla(0, 0%, 0%, 0.04)',
    border200: 'solid 1px hsla(0, 0%, 0%, 0.08)',
    border300: 'solid 1px hsla(0, 0%, 0%, 0.12)',
    border400: 'solid 1px hsla(0, 0%, 0%, 0.16)',
    border500: 'solid 1px hsla(0, 0%, 0%, 0.2)',
    border600: 'solid 1px hsla(0, 0%, 0%, 0.24)',
    border700: 'solid 1px hsla(0, 0%, 0%, 0.3)',
    border800: 'solid 1px hsla(0, 0%, 0%, 0.4)',
    radius100: '2px',
    radius200: '4px',
    radius300: '8px',
    radius400: '12px',
    radius500: '16px',
  },
  lighting: {
    shadow100: '0 1px 4px hsla(0, 0%, 0%, 0.16)',
    shadow200: '0 2px 8px hsla(0, 0%, 0%, 0.16)',
    shadow300: '0 4px 16px hsla(0, 0%, 0%, 0.16)',
    shadow400: '0 8px 24px hsla(0, 0%, 0%, 0.16)',
  },
  input: {
    border: '0px 0px 0px 1px rgba(60, 66, 87, 0.16)',
    focus: '0 0 0 3px rgba(94, 96, 206, 0.36)',
  },
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing:border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin:0;
  }

  p {
    margin:0;
  }

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

  a {
    color: #5e60ce;

    &:hover {
      opacity: 0.8;
    }
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
