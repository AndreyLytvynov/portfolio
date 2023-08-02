import { FC } from 'react';
import NavBar from '@/components/NavBar/NavBar';

const Header: FC = () => {
  return (
    <header className="container fixed inset-x-0 top-0 z-10 border-b-2 border-primary bg-inherit py-10">
      <NavBar />
    </header>
  );
};

export default Header;
