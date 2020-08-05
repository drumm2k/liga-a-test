import { GetStaticProps } from 'next';
import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../components/Input';
import { Label } from '../components/Label';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import fetcher from '../libs/fetcher';

const SearchBox = styled.div`
  margin-bottom: ${(p) => p.theme.spacing.s6};
`;

export default function Home({
  usersData,
  postsData,
}: Record<string, unknown>): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Layout>
      <SearchBox>
        <Label>
          Search
          <Input
            type="text"
            name="search"
            placeholder="by title/post text"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Label>
      </SearchBox>
      <PostList
        searchTerm={searchTerm}
        usersData={usersData}
        postsData={postsData}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const users = await fetcher(`${process.env.NEXT_PUBLIC_API}/users`);
  const posts = await fetcher(`${process.env.NEXT_PUBLIC_API}/posts`);

  return { props: { usersData: users, postsData: posts }, revalidate: 1 };
};
