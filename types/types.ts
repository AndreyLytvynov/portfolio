import { UseFormRegisterReturn } from 'react-hook-form';

export type TypeNavLink = {
  title: string;
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
  text: string;
};

export type InputFieldProps = {
  label: string;
  id: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
  rows?: number | undefined;
};

export type TypeRequestPost = {
  text: string;
  name: string;
  company: string;
};

export type TypePost = {
  name: string;
  company: string;
  text: string;
  date: string;
  _id: string;
};

export type TypeResponsePost = {
  status: string;
  data: TypePost[];
};
