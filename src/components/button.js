import React from 'react';
import { Link } from 'gatsby';

import buttonStyles from './button.module.scss';

const Button = ({ text, primary }) => {
  return (
    <Link
      className={primary ? buttonStyles.buttonPrimary : buttonStyles.button}
      to="/projects"
    >
      {text}
    </Link>
  );
};

export default Button;
