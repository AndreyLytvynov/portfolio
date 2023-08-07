import { FC } from 'react';

import { InputFieldProps } from '@/types/types';

const FeedbackFormInput: FC<InputFieldProps> = ({
  label,
  id,
  placeholder,
  error,
  register,
}) => {
  return (
    <>
      <label className="relative w-full" htmlFor={id}>
        <span className="text-sm text-accent">{label}</span>
        <input
          className={`border ${
            !error
              ? 'border-white'
              : 'border-error focus:border-none focus:shadow-error'
          } mt-2 h-12 w-full rounded-sm px-2.5 py-3 text-base text-body focus:border-[3px] focus:shadow-secondary focus:outline-none`}
          id={id}
          type="text"
          placeholder={placeholder}
          aria-label={label}
          {...register}
        />
        {error && <p className="absolute -bottom-6 text-error">{error}</p>}
      </label>
    </>
  );
};

export default FeedbackFormInput;
