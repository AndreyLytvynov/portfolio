'use client';

import { useState, useEffect, FC, MouseEvent } from 'react';

import { createPortal } from 'react-dom';

import { CgClose } from 'react-icons/cg';

import { TypePost } from '@/types/types';

import s from './Modal.module.css';

type ModalProps = {
  post: TypePost;
  setIsOpen: () => void;
};

const Modal: FC<ModalProps> = ({ setIsOpen, post }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.body.classList.add('blockScroll');
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setIsOpen();
      }
    });
    setMounted(true);
    return () => {
      document.body.classList.remove('blockScroll');
    };
  }, [setIsOpen]);

  const onClose = (event: MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen();
    }
  };

  return mounted
    ? createPortal(
        <div className={s.backdrop} onClick={onClose}>
          <div className={s.modal}>
            <button
              type="button"
              onClick={setIsOpen}
              className="absolute right-[15px] top-[15px] inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-25 text-xl text-gray-200 shadow-primary transition-all duration-300 hover:bg-opacity-40 hover:text-accent hover:shadow-secondary"
            >
              <CgClose />
            </button>
            <div className="mb-4 flex h-[75px] items-center gap-5 overflow-hidden border-b-2 border-primary text-base">
              <p>{post.name}</p>
              <span>|</span>
              <p>{post.company.length !== 0 ? post.company : 'no company'}</p>
            </div>
            <p>{post.text}</p>
            <p className="mt-4 text-right text-gray-400">{post.date}</p>
          </div>
        </div>,
        document.body
      )
    : null;
};
export default Modal;
