import { FC } from 'react';
import Link from 'next/link';

import data from '@/data/data.json';

const NavBar: FC = () => {
  return (
    <nav>
      <ul className="flex justify-end gap-3">
        {data.nav_links.map(link => (
          <li key={link.title}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
