'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';

type SkillProps = {
  title: string;
  percent: number;
};

const Skill: FC<SkillProps> = ({ title, percent }) => {
  return (
    <li key={title} className="w-full overflow-hidden desktop:w-[580px]">
      <p className="text-sm uppercase text-accent">{title}</p>
      <div className="inline-flex h-2 w-full rounded-md bg-text">
        <motion.span
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`rounded-md bg-gradient-to-r from-blue-600 via-pink-500 to-red-500`}
          style={{ width: `${percent}%` }}
        >
          <span className="absolute -top-8 right-0 text-sm">{percent}%</span>
        </motion.span>
      </div>
    </li>
  );
};

export default Skill;
