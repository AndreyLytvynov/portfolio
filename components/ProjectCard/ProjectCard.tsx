import { FC } from 'react';

import Image from 'next/image';

import { BsGithub } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import Link from 'next/link';

type ProjectsCardProps = {
  title: string;
  des: string;
  src: string;
  alt: string;
  githubLink: string | null;
  websiteLink: string;
  technologies: string[];
};

const ProjectsCard: FC<ProjectsCardProps> = ({
  title,
  des,
  src,
  githubLink,
  websiteLink,
  technologies,
}) => {
  return (
    <div className="min-h-[600px] w-full overflow-hidden  rounded-lg bg-card p-4 duration-300 hover:scale-105 hover:border-accent hover:shadow-secondary tablet:w-[344px] desktop:w-[378px]">
      <div className="w-full rounded-lg">
        <Image
          className="h-[300px] w-full rounded-lg object-cover"
          src={src}
          alt={title}
          width={1000}
          height={1000}
        />
      </div>
      <div className="mt-4 flex w-full flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl uppercase text-accent">{title}</h3>
          <div className="flex gap-2">
            {githubLink && (
              <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-lg text-gray-400 duration-300 hover:text-accent">
                <Link
                  href={githubLink}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={'github link'}
                >
                  <BsGithub />
                </Link>
              </span>
            )}
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black text-lg text-gray-400 duration-300 hover:text-accent">
              <Link
                href={websiteLink}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={'website link'}
              >
                <FaGlobe />
              </Link>
            </span>
          </div>
        </div>
        <p className="h-[162px] overflow-hidden text-sm duration-300 hover:text-gray-100">
          {des}
        </p>
        <ul className="flex flex-wrap gap-4">
          {technologies.map(technology => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectsCard;
