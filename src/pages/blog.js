import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import BlogPost from '../components/blogPost';
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
              image
              summary
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
            frontmatter: { title, date, image, summary },
            fields: { slug },
          } = edge.node;
          return (
            <li className={blogStyles.post} key={i}>
              <BlogPost
                title={title}
                date={date}
                image={image}
                text={summary}
                slug={slug}
              />
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;
