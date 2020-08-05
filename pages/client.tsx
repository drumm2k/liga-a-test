import { useState } from 'react';
import styled from 'styled-components';
import { Input } from '../components/Input';
import { Label } from '../components/Label';
import Layout from '../components/Layout';
import PostList from '../components/PostList';

const SearchBox = styled.div`
  margin-bottom: ${(p) => p.theme.spacing.s6};
`;

export default function Home(): JSX.Element {
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
      <PostList searchTerm={searchTerm} />
    </Layout>
  );
}
