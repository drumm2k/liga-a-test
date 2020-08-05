import Head from 'next/head';
import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Wrapper = styled.div`
  max-width: 720px;
  margin: 0 auto;
`;

const Logo = styled.h1`
  color: ${(p) => p.theme.color.accent};
`;

const Layout = ({ children, title = 'Liga-A Test' }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Wrapper>
      <header>
        <Logo>Liga-A Test</Logo>
      </header>
      {children}
    </Wrapper>
  </>
);

export default Layout;
