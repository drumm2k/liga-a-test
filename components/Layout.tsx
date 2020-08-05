import Head from 'next/head';
import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Wrapper = styled.div`
  max-width: 720px;
  margin: 3rem auto;
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
      <Header />
      <main>{children}</main>
    </Wrapper>
  </>
);

export default Layout;
