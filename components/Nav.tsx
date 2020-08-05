import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/">
      <a>Incremental Static Regeneration</a>
    </Link>{' '}
    |{' '}
    <Link href="/client">
      <a>Client rendering</a>
    </Link>
  </nav>
);

export default Nav;
