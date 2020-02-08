import React from 'react';

import projectGridStyles from './projectGrid.module.scss';
import FadeCard from '../components/fadeCard';

const ProjectGrid = () => {
  return (
    <section>
      <ul className={projectGridStyles.projects}>
        <li className={projectGridStyles.projectItem}>
          <FadeCard image='https://puu.sh/EVJqf/238644bdbe.png' title='Torch And Turret' text='A 2D game made in the Unity3D game engine using C#. I made this game for the Brackeys Game Jam 2018' projectLink='https://antonxd.itch.io/torch-and-turret' codeLink='https://github.com/Anton1337/Torch-And-Turret'/>
        </li>
        <li className={projectGridStyles.projectItem}>
          <FadeCard image='https://puu.sh/EVKlA/871e38a044.jpg' title='Gatsby Portfolio' text='A portfolio where i showcase all my software projects. I built the site using React.js and Gatsby' projectLink='https://www.anton.best/' codeLink='https://github.com/Anton1337/gatsby-portfolio' />
        </li>
        <li className={projectGridStyles.projectItem}>
          <FadeCard image='https://puu.sh/F8w6B/73e056facc.png' title='GymIT .NET CORE API' text='A REST API build in .NET CORE 3.1 where users can sign up, and keep track of their workouts and different exercises. MySQL, JWT.'projectLink='https://gymitapp.azurewebsites.net/swagger/index.html' codeLink='https://github.com/Anton1337/gymit-server' />
        </li>
      </ul>
    </section>
  );
};

export default ProjectGrid;
