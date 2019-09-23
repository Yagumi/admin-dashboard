/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ data, children, ...props }) => {
  return (
    <li key={data.id} data={data} {...props}>
      {children}
    </li>
  );
};

ListItem.propTypes = {
  data: PropTypes.object,
  children: PropTypes.any,
};
export default ListItem;
