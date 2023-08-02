'use client';

import { FC, useState } from 'react';
// import { useTranslation } from 'next-i18next';
import { useForm, SubmitHandler } from 'react-hook-form';
import FeedbackFormInput from '@/components/FeedbackFormInput/FeedbackFormInput';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import { TypeFormValues } from '@/types/types';
import FeedbackFormTextarea from '../FeedbackTextarea/FeedbackTextarea';
// import toast, { Toaster } from 'react-hot-toast';

// import FeedbackFormTextarea from '@/components/FeedbackTextarea';
// import Loader from '@/components/Loader';
// import NotifyModal from '@/components/NotifyModal';

const FeedbackForm: FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeFormValues>();

  const onSubmit: SubmitHandler<TypeFormValues> = async data => {
    console.log('data', data);
  };

  return (
    <form
      className="mx-auto flex w-[700px] flex-col gap-8 rounded border p-8"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className="text-xl">Please leave your comment. </h2>
      <FeedbackFormInput
        label={'Name *'}
        id="name"
        placeholder={'your name'}
        register={register('name', {
          required: `*is required`,
          maxLength: {
            value: 70,
            message: `max 70 symbol`,
          },
          validate: {
            noSymbol: (value: string) => {
              if (/^[\p{L}\s'-]+$/u.test(value)) {
                return undefined;
              }
              return `*Use only letters, spaces, dashes.`;
            },
            OnlySpaces: (value: string) => {
              if (!/^\s+$/.test(value)) {
                return undefined;
              }
              return `*The name must contain letters.`;
            },
          },
        })}
        error={errors?.name?.message}
      />
      <FeedbackFormInput
        label={'Company'}
        id="company"
        placeholder={'no company'}
        register={register('company')}
      />
      <FeedbackFormTextarea
        label={'Commentary *'}
        id="commentary"
        placeholder={'your commentary'}
        register={register('commentary', {
          required: `*is required`,
          maxLength: {
            value: 3000,
            message: `*Maximum 3000 characters`,
          },
          validate: {
            OnlySpaces: (value: string) => {
              if (!/^\s+$/.test(value)) {
                return undefined;
              }
              return `*The name must contain letters.`;
            },
          },
        })}
        error={errors?.commentary?.message}
        rows={6}
      />
      <SubmitBtn className={'mt-12'}>Send</SubmitBtn>

      {/* <Toaster position="top-right" reverseOrder={false} />
      {isModalOpen && <NotifyModal setIsModalOpen={setIsModalOpen} />} */}
    </form>
  );
};

export default FeedbackForm;
