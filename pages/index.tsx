import Head from 'next/head';
import styled from 'styled-components';

const Hello = styled.div`
  background-color: palegoldenrod;
`;

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hello>Hello</Hello>
      </main>
    </div>
  );
}
