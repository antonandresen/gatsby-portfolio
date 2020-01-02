import React from 'react';

import Button from './button';

import fadeCardStyles from './fadeCard.module.scss';

const FadeCard = ({ image, title, text }) => {
  return (
    <div className={fadeCardStyles.card}>
      <div className={fadeCardStyles.image}>
        <img src={image} alt="project overview" />
      </div>
      <div className={fadeCardStyles.content}>
        <h3 className={fadeCardStyles.title}>{title}</h3>
        <p className={fadeCardStyles.text}>{text}</p>
        <Button text="Find Out More" />
      </div>
    </div>
  );
};

export default FadeCard;
