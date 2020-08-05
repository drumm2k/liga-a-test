import useSWR from 'swr';
import fetcher from '../libs/fetcher';
import { PostType } from '../modules/Post';

export default function PostList(): JSX.Element {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  if (error) return <div>Ошибка загрузки данных</div>;
  if (!data) return <div>Загрузка...</div>;

  return (
    <>
      {data.map(({ id, title, body }: PostType) => (
        <div key={id}>
          <h2>{title}</h2>
          <div>{body}</div>
        </div>
      ))}
    </>
  );
}
