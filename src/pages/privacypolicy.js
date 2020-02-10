import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const Privacypolicy = () => {
  return (
    <Layout>
      <Head pageTitle="Privacy Policy" />
      <h1>Privacy Policy</h1>
      <h2>What information do i collect?</h2>
      <p>
        I dont collect any information at all from anyone, I only authenticate
        with my own google account on the server to fetch private youtube
        playlists.
      </p>
      <h2>How do i use the information?</h2>
      <p>
        As previously stated, I dont collect any information at all, so I dont
        use it for anything.
      </p>
      <h2>What information do I share?</h2>
      <p>
        As previously stated, I dont collect any information at all, so I dont
        share any information either.
      </p>
    </Layout>
  );
};

export default Privacypolicy;
