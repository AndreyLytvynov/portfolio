'use client';
import { FC } from 'react';
import Image from 'next/image';

import { useTypewriter, Cursor } from 'react-simple-typewriter';

import Media from '@/components/Media/Media';

import { data } from '@/assets';

const Hero: FC = () => {
  const [text] = useTypewriter({
    words: [
      'Full Stack Developer',
      'Coding enthusiast',
      'Conqueror of the Java Scrypt',
      'React lover',
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section id="home">
      <div className="container flex flex-col-reverse justify-between gap-5 desktop:flex-row desktop:gap-10">
        <div className="mt-5 flex flex-col tablet:mt-10">
          <h1 className="mb-4 text-lg font-bold text-white tablet:text-5xl">
            Hi, I&apos;m{' '}
            <span className="capitalize text-accent"> Andrii Lytvynov</span>
          </h1>
          <p className="mb-4 text-lg font-bold text-white tablet:mb-10 tablet:text-2xl">
            a <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#ede734" />
          </p>
          <p className="leading-2 mb-auto text-xs tracking-wide tablet:text-base  desktop:text-lg desktop:leading-10">
            {data.about_me}
          </p>
          <Media />
        </div>
        <Image
          src={data.my_photo.src}
          alt={data.my_photo.alt}
          width={500}
          height={500}
          className="mx-auto w-full rounded desktop:w-[500px]"
        />
      </div>
    </section>
  );
};

export default Hero;
