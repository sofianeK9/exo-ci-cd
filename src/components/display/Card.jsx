import React from 'react';

const Card = ({ title, children, footer, className = '', ...props }) => {
  return (
    <div className={`bg-white shadow rounded p-4 ${className}`} {...props}>
      {title && <div className="text-lg font-bold mb-2">{title}</div>}
      <div className="mb-4">{children}</div>
      {footer && <div className="text-right text-sm text-gray-600">{footer}</div>}
    </div>
  );
};

export default Card;
