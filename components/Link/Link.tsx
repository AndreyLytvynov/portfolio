import { FC } from 'react';

import Link from 'next/link';

type SocialLinkProps = {
  children: React.ReactNode;
  href: string;
  ariaLabel: string;
  className: string;
  target?: string;
};

const SocialLink: FC<SocialLinkProps> = ({
  children,
  href,
  ariaLabel,
  className,
  target = '_self',
}) => {
  return (
    <Link
      className={`${className}`}
      href={href}
      target={target}
      rel="noopener noreferrer nofollow"
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

export default SocialLink;
