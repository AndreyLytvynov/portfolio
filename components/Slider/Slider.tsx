'use client';

import { FC } from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import Post from '../Post/Post';

import { TypePost } from '@/types/types';

type SliderProps = {
  data: TypePost[];
};

const Slider: FC<SliderProps> = ({ data }) => {
  return (
    <>
      <Swiper
        className="mx-auto h-[370px]"
        modules={[Pagination]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          1280: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((post: TypePost) => {
          return (
            <SwiperSlide key={post._id}>
              <Post post={post} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
