import React from 'react';

import projectGridStyles from './projectGrid.module.scss';
import FadeCard from '../components/fadeCard';

const ProjectGrid = () => {
  return (
    <section>
      <ul className={projectGridStyles.projects}>
        <li className={projectGridStyles.projectItem}>
          <FadeCard image='https://puu.sh/EVJqf/238644bdbe.png' title='Torch And Turret' text='A 2D game made in the Unity3D game engine using C#. I made this game for the Brackeys Game Jam 2018'/>
        </li>
        <li className={projectGridStyles.projectItem}>
          <FadeCard image='https://puu.sh/EVKlA/871e38a044.jpg' title='Gatsby Portfolio' text='A portfolio where i showcase all my software projects. I built the site using React.js and Gatsby.js' />
        </li>
      </ul>
    </section>
  );
};

export default ProjectGrid;
