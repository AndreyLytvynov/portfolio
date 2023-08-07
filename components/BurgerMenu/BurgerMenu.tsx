'use client';

import React, { useState } from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import NavBar from '../NavBar/NavBar';

const BurgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="tablet:hidden">
      <button type="button" className={'cursor-pointer'} onClick={handleClick}>
        <RxHamburgerMenu className={'h-7 w-7'} />
      </button>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 h-full w-full bg-black bg-opacity-50 "
          onClick={handleClick}
        >
          <NavBar
            handleClick={handleClick}
            className={
              'absolute right-0 z-30 mx-auto w-[170px] flex-col items-center justify-center bg-black py-5'
            }
          />
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
