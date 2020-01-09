import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

import contactStyles from './contact.module.scss';

const ContactPage = () => {
  return (
    <Layout>
      <Head pageTitle="Contact" />
      <article className={contactStyles.container}>
        <section className={contactStyles.illustration}>
          <img src="/contact.svg" />
        </section>
        <section className={contactStyles.content}>
          <h1>Get in touch!</h1>
          <p>Form comes here.</p>
          <a href="mailto:anton.andresen@hotmail.com?subject=Business opportunity">
            anton.andresen@hotmail.com
          </a>
        </section>
      </article>
    </Layout>
  );
};

export default ContactPage;
