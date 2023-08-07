import { FC } from 'react';

import SocialLink from '@/components/Link/Link';

import { FaLinkedinIn } from 'react-icons/fa';
import { SiGithub, SiGmail, SiTelegram } from 'react-icons/si';

import s from './Media.module.css';

type MediaProps = {
  className?: string;
};

const Media: FC<MediaProps> = ({ className }) => {
  return (
    <div
      className={`xl:flex-row flex flex-col justify-between exceptDesktop:mt-6 ${className}`}
    >
      <h2 className="mb-4 text-base uppercase">contact me</h2>
      <div className="flex gap-6">
        <SocialLink
          className={s.bannerIcon}
          href={'https://github.com/AndreyLytvynov?tab=repositories'}
          ariaLabel={'github link'}
          target={'_blank'}
        >
          <SiGithub />
        </SocialLink>

        <SocialLink
          className={s.bannerIcon}
          href={'https://t.me/LytvynovAndrii'}
          ariaLabel={'github link'}
          target={'_blank'}
        >
          <SiTelegram />
        </SocialLink>

        <SocialLink
          className={s.bannerIcon}
          href={'mailto:mrjastonehome@gmail.com'}
          ariaLabel={'gmail'}
        >
          <SiGmail />
        </SocialLink>

        <SocialLink
          className={s.bannerIcon}
          href={'https://www.linkedin.com/in/andrii-lytvynov/'}
          ariaLabel={'linkedin link'}
          target={'_blank'}
        >
          <FaLinkedinIn />
        </SocialLink>
      </div>
    </div>
  );
};

export default Media;
