import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import SocialIconBar from './socialIconBar';

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
      <SocialIconBar />
    </footer>
  );
};

export default Footer;
