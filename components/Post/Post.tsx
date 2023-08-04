import { TypePost } from '@/types/types';
import { FC } from 'react';

type PostProp = {
  post: TypePost;
};

const Post: FC<PostProp> = ({ post }) => {
  return (
    <div
      key={post._id}
      className="flex h-[320px] w-full flex-col gap-4 rounded-lg bg-card p-5 desktop:w-[592px]"
    >
      <div className="flex h-[75px] items-center gap-5 overflow-hidden border-b-2 border-primary text-base">
        <svg
          stroke="#ffe700"
          fill="#ffe700"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="60px"
          width="60px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M209 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1zM385 96h-65c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h38.7c4.6 0 8.3 3.9 8 8.6-2.3 35.5-18.8 60.2-31.3 74.1-4.7 5.2-1 13.4 5.9 13.4h39.9c2.5 0 4.8-1.1 6.3-3.1 7.4-9.6 28.5-41.6 28.5-93.9v-192c0-17.8-13.3-31.1-31-31.1z"></path>
        </svg>
        <p>{post.name}</p>
        <span>|</span>
        <p>{post.company.length !== 0 ? post.company : 'no company'}</p>
      </div>
      <p
        className="line-clamp-[6] text-justify text-xs"
        style={{ flexGrow: 2 }}
      >
        {post.text}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-gray-400">{post.date}</p>
        {post.text.length >= 430 && (
          <button
            type="button"
            className={`rounded border border-card p-3 text-accent hover:border-card hover:bg-inherit hover:text-gray-100 hover:shadow-secondary focus:border-card focus:shadow-secondary`}
          >
            Read more
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
