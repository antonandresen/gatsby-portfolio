import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/landingLayout';
import Head from '../components/head';
import LandingImage from '../components/landingImage';
import indexStyles from './index.module.scss';

const IndexPage = () => {
  return (
    <Layout>
      <Head pageTitle="Home" />
      <LandingImage />
    </Layout>
  );
};

export default IndexPage;
