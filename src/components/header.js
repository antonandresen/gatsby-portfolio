import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

  const handleLinkClick = e => {
    setSideMenuIsOpen(false);
  };

  return (
    <header className={[headerStyles.header].join(' ')}>
      <div className={headerStyles.title}>
        <h4>
          <Link to="/">
            {/*data.site.siteMetadata.titleShort*/}
            AntoN
          </Link>
        </h4>
      </div>
      <ul
        key={'nav'}
        className={[
          headerStyles.navList,
          sideMenuIsOpen && headerStyles.navActive,
        ].join(' ')}
      >
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            onClick={handleLinkClick}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            onClick={handleLinkClick}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            onClick={handleLinkClick}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
            onClick={handleLinkClick}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div
        key={'burger'}
        className={[headerStyles.burger, headerStyles.burgerToggle].join(' ')}
        onClick={e => {
          setSideMenuIsOpen(!sideMenuIsOpen);
        }}
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </header>
  );
};

export default Header;
