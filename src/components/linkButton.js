import React from 'react';

import buttonStyles from './linkButton.module.scss';

const LinkButton = ({ text, primary, link }) => {
  return (
    <a
      target="_blank"
      className={primary ? buttonStyles.buttonPrimary : buttonStyles.button}
      href={link}
    >
      {text}
    </a>
  );
};

export default LinkButton;
