import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/">
      <a>ISR</a>
    </Link>{' '}
    |{' '}
    <Link href="/client">
      <a>Client only</a>
    </Link>
  </nav>
);

export default Nav;
