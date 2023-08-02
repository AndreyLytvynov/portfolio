import { FC } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = {
  label: string;
  id: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
  rows?: number | undefined;
};

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
        <input
          className={`border ${
            !error ? 'border-accent' : 'border-red'
          } text-black-charcoal placeholder:text-black-charcoal bg-yellow h-12 w-full rounded-sm px-2.5 py-3 text-base placeholder:text-base focus:border-[3px] focus:border-accent focus:outline-none tablet:px-3`}
          id={id}
          type="text"
          placeholder={placeholder}
          aria-label={label}
          {...register}
        />
        {error && (
          <p className="text-red font-roboto absolute -bottom-5 text-tiny leading-4">
            {error}
          </p>
        )}
      </label>
    </>
  );
};

export default FeedbackFormInput;
