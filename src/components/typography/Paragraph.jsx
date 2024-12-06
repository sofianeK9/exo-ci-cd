import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Paragraph =({children, className}) => {
    const baseStyles = 'text-base text-gray-800 leading-relaxed'
    return <p className={className(baseStyles, className)}>{children}</p>
}

Paragraph.PropTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,

}

Paragraph.defaultProps = {
    className: '',
  };
  
  export default Paragraph;