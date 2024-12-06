import React from 'react';

const Menu = ({ items = [], onItemClick, className = '', ...props }) => {
  return (
    <nav className={`menu ${className}`} {...props}>
      <ul className="flex space-x-4">
        {items.map((item, index) => (
          <li key={index}>
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              onClick={() => onItemClick(item)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
