import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Card from '../components/card';
import ProjectGrid from '../components/projectGrid';

import projectsStyles from './projects.module.scss';

const ProjectsPage = () => {
  return (
    <Layout>
      <Head pageTitle="Projects" />
      <h1>Projects</h1>
      <ProjectGrid />
    </Layout>
  );
};

export default ProjectsPage;
