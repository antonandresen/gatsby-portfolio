import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import SocialIconBar from '../components/socialIconBar';

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
          <p>
            For any business inquiries, hit me up on my email! Simply click the
            email link below, or copy my email and send a mail my way manually.
            I'm looking forward to hear from you!
          </p>
          <a href="mailto:anton.andresen@hotmail.com?subject=Business Opportunity">
            anton.andresen@hotmail.com
          </a>
        </section>
      </article>
    </Layout>
  );
};

export default ContactPage;
