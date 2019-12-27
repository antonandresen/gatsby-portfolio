import React from 'react';

import Button from '../components/button';
import landingImageStyles from './landingImage.module.scss';

const LandingImage = () => {
  return (
    <div className={landingImageStyles.showcase}>
      <h1 className={landingImageStyles.bigText}>Anton Andrésen</h1>
      <p className={landingImageStyles.smallText}>
        Fullstack developer from sweden.
      </p>
      <Button text={'Check My Projects'} />
    </div>
  );
};

export default LandingImage;
