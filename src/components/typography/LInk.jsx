import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, children, className, target }) => {
  return (
    <a
      href={href}
      className={`text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
};

Link.defaultProps = {
  className: '',
  target: '_self',
};

export default Link;
