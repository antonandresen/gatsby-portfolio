import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import socialIconBarStyles from './socialIconBar.module.scss';

const SocialIconBar = () => {
  return (
    <section>
      <a
        target="_blank"
        className={socialIconBarStyles.socialBtn}
        href="https://github.com/Anton1337"
      >
        <i>
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </i>
      </a>
      <a
        target="_blank"
        className={socialIconBarStyles.socialBtn}
        href="https://www.linkedin.com/in/anton-andr%C3%A9sen-164703161/"
      >
        <i>
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </i>
      </a>
      <a
        target="_blank"
        className={socialIconBarStyles.socialBtn}
        href="https://www.youtube.com/antonosu"
      >
        <i>
          <FontAwesomeIcon icon={faYoutube} size="1x" />
        </i>
      </a>
    </section>
  );
};

export default SocialIconBar;
