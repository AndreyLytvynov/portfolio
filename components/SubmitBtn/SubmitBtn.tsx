import { FC, ReactNode } from 'react';

type SubmitButtonProps = {
  children: ReactNode;
  className?: string;
};

const SubmitBtn: FC<SubmitButtonProps> = ({ children, className }) => {
  return (
    <button
      type="submit"
      className={`mx-auto flex w-1/3 items-center justify-center rounded border border-white py-4 text-sm hover:border-body hover:bg-inherit hover:text-gray-100 hover:shadow-secondary ${className}`}
    >
      {children}
    </button>
  );
};

export default SubmitBtn;
