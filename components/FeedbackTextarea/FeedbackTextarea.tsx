import { FC } from 'react';

import { InputFieldProps } from '@/types/types';

const FeedbackFormTextarea: FC<InputFieldProps> = ({
  label,
  id,
  placeholder,
  error,
  register,
  rows,
}) => {
  return (
    <>
      <label className="relative h-[180px] w-full" htmlFor={id}>
        <span className="text-lg text-accent">{label}</span>
        <textarea
          className={`${
            !error
              ? 'border-white'
              : 'border-error focus:border-none focus:shadow-error'
          } mt-2 h-full w-full resize-none rounded-sm border px-2.5 py-3 text-base text-body focus:border-[3px] focus:shadow-secondary focus:outline-none`}
          id={id}
          placeholder={placeholder}
          aria-label={label}
          {...register}
          rows={rows}
        />
        {error && <p className="absolute -bottom-[65px] text-error">{error}</p>}
      </label>
    </>
  );
};

export default FeedbackFormTextarea;
