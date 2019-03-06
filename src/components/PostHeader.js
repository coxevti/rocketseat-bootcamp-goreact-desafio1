import React from 'react';
import PropTypes from 'prop-types';

import './scss/PostHeader.scss';

const PostHeader = ({
  title, time, description, avatar,
}) => (
  <article className="flex-container">
    <div className="row">
      <div className="flex-item">
        <div>
          <img src={avatar} alt="avatar" />
          <span className="descriptionAvatar">
            <h1>{title}</h1>
            <time>{time}</time>
          </span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  </article>
);

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostHeader;
