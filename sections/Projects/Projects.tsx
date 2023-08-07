import { FC } from 'react';

import ProjectsCard from '@/components/ProjectCard/ProjectCard';

import { data } from '@/assets';

import { TypeProjectCard } from '@/types/types';

const Projects: FC = () => {
  return (
    <section id="projects" className="pt-10 tablet:pt-20">
      <div className="container">
        <h2 className="mb-10 text-2xl font-bold text-white">My projects</h2>
        <ul className="flex flex-wrap gap-4 desktop:gap-10">
          {data.projects.map((project: TypeProjectCard) => (
            <ProjectsCard
              key={project.title}
              title={project.title}
              des={project.description}
              src={project.img.src}
              alt={project.img.alt}
              githubLink={project.git}
              websiteLink={project.site}
              technologies={project.technologies}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
