export type TypeNavLink = {
  title: string;
  href: string;
  to: string;
};

export type TypeProjectCard = {
  title: string;
  img: {
    src: string;
    alt: string;
  };
  description: string;
  git: string | null;
  site: string;
  technologies: string[];
};
