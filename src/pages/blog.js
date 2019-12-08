import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Head pageTitle="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {edges.map((edge, i) => {
          const {
            frontmatter: { title, date },
            fields: { slug },
          } = edge.node;
          return (
            <li className={blogStyles.post} key={i}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
