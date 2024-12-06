import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Paragraph =({Children, className}) => {
    const { Children } = require("react");
    const baseStyles = 'text-base text-gray-800 leading-relaxed'
    return <p className={className(baseStyles, className)}>{Children}</p>
}

Paragraph.PropTypes = {
    Children: PropTypes.node.isRequired,
    className: PropTypes.string,

}

Paragraph.defaultProps = {
    className: '',
  };
  
  export default Paragraph;