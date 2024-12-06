import React from 'react';
import propTypes from 'prop-types';


const Paragraph =({children, className}) => {
    const baseStyles = 'text-base text-gray-800 leading-relaxed'

    return <p className={`${baseStyles}, {className}`}>{children}</p>
}

Paragraph.propTypes = {
    children: propTypes.node.isRequired,
    className: propTypes.string,

}

Paragraph.defaultProps = {
    className: '',
  };
  
  export default Paragraph;