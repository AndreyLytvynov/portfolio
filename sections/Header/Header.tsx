import { FC } from 'react';

import NavBar from '@/components/NavBar/NavBar';
import BurgerMenu from '@/components/BurgerMenu/BurgerMenu';

const Header: FC = () => {
  return (
    <header className="container fixed inset-x-0 top-0 z-10 flex items-end justify-end border-b-2 border-primary bg-inherit py-8">
      <div className="onlyMobile:hidden">
        <NavBar />
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
