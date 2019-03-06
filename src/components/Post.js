import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import './scss/Post.scss';

const Post = ({ posts }) => (
  <section>
    {posts
      && posts.map(post => (
        <PostHeader
          title={post.title}
          time={post.time}
          avatar={post.avatar}
          description={post.description}
        />
      ))}
  </section>
);

Post.propTypes = {
  posts: PropTypes.shape({
    title: PropTypes.string,
    time: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Post;
