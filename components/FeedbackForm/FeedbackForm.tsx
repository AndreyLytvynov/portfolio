'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { useForm, SubmitHandler } from 'react-hook-form';

import FeedbackFormInput from '@/components/FeedbackFormInput/FeedbackFormInput';
import FeedbackFormTextarea from '@/components/FeedbackTextarea/FeedbackTextarea';
import SubmitBtn from '@/components/SubmitBtn/SubmitBtn';

import { addPost } from '@/service/service';

import { TypeFormValues } from '@/types/types';

const FeedbackForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeFormValues>();

  const router = useRouter();

  const onSubmit: SubmitHandler<TypeFormValues> = async data => {
    await addPost(data);
    reset();
    router.refresh();
  };

  return (
    <form
      className="mx-auto flex w-full flex-col gap-8 rounded border p-8 desktop:w-[700px]"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className="text-xl">Please leave your comment</h2>
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
        register={register('company', {
          maxLength: {
            value: 70,
            message: `max 70 symbol`,
          },
        })}
      />
      <FeedbackFormTextarea
        label={'Commentary *'}
        id="text"
        placeholder={'your commentary'}
        register={register('text', {
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
        error={errors?.text?.message}
        rows={6}
      />
      <SubmitBtn className={'mt-12'}>Send</SubmitBtn>
    </form>
  );
};

export default FeedbackForm;
