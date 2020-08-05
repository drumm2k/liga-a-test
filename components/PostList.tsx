import useSWR from 'swr';
import { PostType } from '../interfaces/Post';
import { UserType } from '../interfaces/User';
import fetcher from '../libs/fetcher';

export default function PostList(): JSX.Element {
  const { data: users, error: usersError } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  );
  const { data: posts, error: postsError } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (postsError || usersError) return <div>Ошибка загрузки данных</div>;
  if (!posts || !users) return <div>Загрузка...</div>;

  const getUser = (userId: number) => {
    return users.find((user: UserType) => user.id === userId);
  };

  return (
    <>
      {posts.map(({ id, userId, title, body }: PostType) => (
        <article key={id}>
          <h2>{title}</h2>
          <div>
            {getUser(userId).name} @{getUser(userId).username}
          </div>
          <div>{body}</div>
        </article>
      ))}
    </>
  );
}
