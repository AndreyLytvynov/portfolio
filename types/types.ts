import { UseFormRegisterReturn } from 'react-hook-form';

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

export type TypeFormValues = {
  name: string;
  company: string;
  commentary: string;
};

export type InputFieldProps = {
  label: string;
  id: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
  rows?: number | undefined;
};
