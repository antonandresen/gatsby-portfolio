import React from 'react';

import cardStyles from './card.module.scss';

const Card = ({ date, title, body, image }) => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.cardImage}>
        <img src="https://puu.sh/EV9Rb/eda2daf30e.jpg" alt="project overview" />
      </div>
      <div className={cardStyles.cardText}>
        <span className={cardStyles.date}>{date}</span>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className={cardStyles.cardStats}>
        <div className={cardStyles.stat}>
          <div className={cardStyles.value}>
            4<sup>m</sup>
          </div>
          <div className={cardStyles.type}>read</div>
        </div>
        <div className={[cardStyles.stat, cardStyles.border].join(' ')}>
          <div className={cardStyles.value}>5123</div>
          <div className={cardStyles.type}>views</div>
        </div>
        <div className={cardStyles.stat}>
          <div className={cardStyles.value}>32</div>
          <div className={cardStyles.type}>comments</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
