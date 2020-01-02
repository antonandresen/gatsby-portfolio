import React from 'react';

import projectGridStyles from './projectGrid.module.scss';
import FadeCard from '../components/fadeCard';

const ProjectGrid = () => {
  return (
    <section>
      <ul className={projectGridStyles.projects}>
        <li className={projectGridStyles.projectItem}>
          <FadeCard image='https://unsplash.it/800/600?image=82' title='osuproject' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae.'/>
        </li>
        <li className={projectGridStyles.projectItem}>
          <FadeCard image='https://unsplash.it/800/600?image=83' title='Portfolio' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae.'/>
        </li>
        <li className={projectGridStyles.projectItem}>
          <FadeCard image='https://unsplash.it/800/600?image=84' title='Discord bot' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae.'/>
        </li>
        <li className={projectGridStyles.projectItem}>
          <FadeCard image='https://unsplash.it/800/600?image=85' title='Something else' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, beatae.'/>
        </li>
      </ul>
    </section>
  );
};

export default ProjectGrid;
