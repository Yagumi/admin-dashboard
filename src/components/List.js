import React from 'react';
import PropTypes from 'prop-types';

const List = ({ arr, children, ...props }) => {
  return (
    <ul arr={arr} {...props}>
      {arr.map(item => (
        <li key={item.id}>
          <h3>{item.title}</h3>
          <span>{item.number}</span>
          {children}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  arr: PropTypes.array,
  children: PropTypes.any,
};
export default List;
