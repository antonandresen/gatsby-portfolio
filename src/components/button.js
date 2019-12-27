import React from 'react';
import { Link } from 'gatsby';

import buttonStyles from './button.module.scss';

const Button = ({ text }) => {
  return (
    <Link className={buttonStyles.button} to="/projects">
      {text}
    </Link>
  );
};

export default Button;
