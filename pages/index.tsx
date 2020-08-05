import styled from 'styled-components';
import Layout from '../components/Layout';

const Hello = styled.div`
  background-color: palegoldenrod;
`;

export default function Home(): JSX.Element {
  return (
    <Layout>
      <main>
        <Hello>Hello</Hello>
      </main>
    </Layout>
  );
}
