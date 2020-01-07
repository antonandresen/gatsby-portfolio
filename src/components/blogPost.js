import React from 'react';
import { Link } from 'gatsby';

import blogPostStyles from './blogPost.module.scss';

const BlogPost = ({ title, date, image, text, slug }) => {
  return (
    <article className={blogPostStyles.post}>
      <div className={blogPostStyles.image}>
        <img src={image} alt="relevant blog post content photo" />
      </div>
      <div className={blogPostStyles.info}>
        <div className={blogPostStyles.date}>
          <span>{date}</span>
        </div>
        <h2 className={blogPostStyles.title}>{title}</h2>
        <p className={blogPostStyles.text}>{text}</p>
        <Link to={`/blog/${slug}`} className={blogPostStyles.cta}>
          Read more
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
