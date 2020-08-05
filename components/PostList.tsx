import { useState } from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { PostType } from '../interfaces/Post';
import { UserType } from '../interfaces/User';
import fetcher from '../libs/fetcher';
import { Input } from './Input';
import { Label } from './Label';

const SearchBox = styled.div`
  margin-bottom: ${(p) => p.theme.spacing.s6};
`;

const PostsContainer = styled.div`
  display: grid;
  grid-gap: ${(p) => p.theme.spacing.s6};
`;

const Post = styled.article`
  color: ${(p) => p.theme.color.gray900};
  padding: ${(p) => p.theme.spacing.s4};
  border: ${(p) => p.theme.border.border200};
  border-radius: ${(p) => p.theme.border.radius200};
  box-shadow: ${(p) => p.theme.lighting.shadow100};
`;

const PostTitle = styled.h2`
  font-size: ${(p) => p.theme.font.size.lg};
  font-weight: ${(p) => p.theme.font.weight.bold};
`;

const PostAuthor = styled.p`
  font-size: ${(p) => p.theme.font.size.md};
  margin-top: ${(p) => p.theme.spacing.s2};
  margin-bottom: ${(p) => p.theme.spacing.s4};

  span {
    color: ${(p) => p.theme.color.accent};
  }
`;

const PostBody = styled.div`
  font-size: ${(p) => p.theme.font.size.md};
`;

const NothingFound = styled.div`
  display: flex;
  margin: ${(p) => p.theme.spacing.s8} 0;
  justify-content: center;
`;

export default function PostList(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data: users, error: usersError } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  );
  const { data: posts, error: postsError } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (postsError || usersError) return <div>Error loading data</div>;
  if (!posts || !users) return <div>Loading...</div>;

  const getUser = (userId: number) => {
    return users.find((user: UserType) => user.id === userId);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = posts.filter((post: PostType) => {
    return (
      post.body.includes(searchTerm.toLowerCase()) ||
      post.title.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
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
      <PostsContainer>
        {filteredPosts.map(({ id, userId, title, body }: PostType) => (
          <Post key={id}>
            <PostTitle>{title}</PostTitle>
            <PostAuthor>
              {getUser(userId).name} <span>@{getUser(userId).username}</span>
            </PostAuthor>
            <PostBody>{body}</PostBody>
          </Post>
        ))}
        {!filteredPosts.length && <NothingFound>Oops! Nothing found</NothingFound>}
      </PostsContainer>
    </>
  );
}
