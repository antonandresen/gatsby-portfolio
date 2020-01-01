import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Card from '../components/card';

const ProjectsPage = () => {
  return (
    <Layout>
      <Head pageTitle="Projects" />
      <h1>Projects</h1>
      <p>my projects come here.</p>
      <Card title="Project One" date="2 days ago" body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet commodi molestias, a perferendis facilis aspernatur ex ab maiores assumenda est!' />
    </Layout>
  );
};

export default ProjectsPage;
