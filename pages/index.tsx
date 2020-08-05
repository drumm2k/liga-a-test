import Layout from '../components/Layout';
import PostList from '../components/PostList';

export default function Home(): JSX.Element {
  return (
    <Layout>
      <PostList />
    </Layout>
  );
}
