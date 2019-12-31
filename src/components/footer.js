import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import footerStyles from './footer.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}. © 2019</p>
      <div className={footerStyles.socialMediaRow}>
        <a
          target="_blank"
          className={footerStyles.socialBtn}
          href="https://github.com/Anton1337"
        >
          <i className={footerStyles.asd}>
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </i>
        </a>
        <a
          target="_blank"
          className={footerStyles.socialBtn}
          href="https://www.linkedin.com/in/anton-andr%C3%A9sen-164703161/"
        >
          <i>
            <FontAwesomeIcon icon={faLinkedin} size="1x" />
          </i>
        </a>
        <a
          target="_blank"
          className={footerStyles.socialBtn}
          href="https://www.youtube.com/antonosu"
        >
          <i>
            <FontAwesomeIcon icon={faYoutube} size="1x" />
          </i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
