'use client';

import { FC } from 'react';
import { Link } from 'react-scroll';

import { data } from '@/assets';

import { TypeNavLink } from '@/types/types';

const NavBar: FC = () => {
  return (
    <nav>
      <ul className="flex justify-end gap-10">
        {data.nav_links.map((link: TypeNavLink) => (
          <li key={link.title} className={`text-lg hover:text-white`}>
            <Link
              to={link.to}
              smooth={true}
              duration={700}
              spy={true}
              hashSpy={true}
              offset={-70}
              isDynamic={true}
              spyThrottle={500}
              className="py-10 duration-300 hover:text-accent"
              href={'/'}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
