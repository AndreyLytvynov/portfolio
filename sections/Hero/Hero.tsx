'use client';
import { FC } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import Image from 'next/image';
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
    <section>
      <div className="container flex  justify-between gap-10">
        <div className="flex flex-col pt-10">
          <h1 className="text-6xl mb-4 text-5xl font-bold text-white">
            Hi, I&apos;m{' '}
            <span className="capitalize text-accent"> Andrii Lytvynov</span>
          </h1>
          <p className="mb-10 text-2xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#ede734" />
          </p>
          <p className="mb-auto text-lg leading-10 tracking-wide">
            {data.about_me}
          </p>
          <Media />
        </div>
        <Image
          src={data.my_photo.src}
          alt={data.my_photo.alt}
          width={500}
          height={500}
          className="rounded desktop:w-[500px]"
        />
      </div>
    </section>
  );
};

export default Hero;
