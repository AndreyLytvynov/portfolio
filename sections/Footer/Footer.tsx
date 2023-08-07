import Media from '@/components/Media/Media';
import { FC } from 'react';

import s from './Footer.module.css';

const Footer: FC = () => {
  return (
    <footer className="container flex flex-wrap items-center justify-between gap-y-3 border-t-2 border-primary py-8 text-xs">
      <p>© 2023 Portfolio Andrii Lytvynov | All rights reserved.</p>
      <Media className={s.footerMedia} />
    </footer>
  );
};

export default Footer;
