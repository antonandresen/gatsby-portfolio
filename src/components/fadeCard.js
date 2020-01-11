import React from 'react';

import LinkButton from './linkButton';

import fadeCardStyles from './fadeCard.module.scss';

const FadeCard = ({ image, title, text, projectLink, codeLink }) => {
  return (
    <div className={fadeCardStyles.card}>
      <div className={fadeCardStyles.image}>
        <img src={image} alt="project overview" />
      </div>
      <div className={fadeCardStyles.content}>
        <h3 className={fadeCardStyles.title}>{title}</h3>

        <p className={fadeCardStyles.text}>{text}</p>
        <LinkButton primary text="Checkout Project" link={projectLink} />
        <LinkButton primary text="Look At The Code" link={codeLink} />
      </div>
    </div>
  );
};

export default FadeCard;
