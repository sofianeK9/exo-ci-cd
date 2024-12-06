import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href = '#', children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
