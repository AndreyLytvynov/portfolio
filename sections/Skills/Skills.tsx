import { FC } from 'react';

import { data } from '@/assets';
import Skill from '@/components/Skill/Skill';

const Skills: FC = () => {
  return (
    <section className="pt-20" id="skills">
      <div className="container">
        <h2 className="mb-10 text-2xl font-bold text-white">
          Professional Skills
        </h2>
        <ul className="flex flex-wrap justify-between gap-y-5">
          {data.skills.map(skill => (
            <Skill
              key={skill.title}
              title={skill.title}
              percent={skill.percent}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
