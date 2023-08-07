'use client';

import { FC } from 'react';
import { Link } from 'react-scroll';

import { data } from '@/assets';

import { TypeNavLink } from '@/types/types';

type NavBarProp = {
  className?: string;
  handleClick?: () => void;
};

const NavBar: FC<NavBarProp> = ({ className, handleClick }) => {
  return (
    <nav>
      <ul className={`flex justify-end gap-10 ${className}`}>
        {data.nav_links.map((link: TypeNavLink) => (
          <li
            key={link.title}
            className={`text-base hover:text-white desktop:text-lg`}
          >
            <Link
              onClick={handleClick}
              to={link.to}
              smooth={true}
              duration={700}
              spy={true}
              hashSpy={true}
              offset={-70}
              isDynamic={true}
              spyThrottle={500}
              className="py-10 duration-300 hover:cursor-pointer hover:text-accent"
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
