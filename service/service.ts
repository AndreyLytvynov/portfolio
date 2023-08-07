import { getCurrentDateFormatted } from '@/utils/getCurrentDate';

import { TypeRequestPost, TypeResponsePost } from '@/types/types';

export async function getPost(): Promise<TypeResponsePost> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function addPost(data: TypeRequestPost): Promise<void> {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      date: getCurrentDateFormatted(),
    }),
  });
}
