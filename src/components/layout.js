import React, { Fragment } from 'react';

import Footer from './footer';
import Header from './header';
import '../styles/index.scss';
import '../styles/global.scss';
import layoutStyles from './layout.module.scss';

const Layout = props => {
  return (
    <Fragment>
      <Header />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.content}>{props.children}</main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
