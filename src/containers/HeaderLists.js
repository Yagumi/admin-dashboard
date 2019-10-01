import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderLists = ({
  title,
  subTitleTop,
  subTitleBottom,
  link,
  linkName,
  children,
  ...props
}) => {
  return (
    <header {...props}>
      <div>
        <h2>{title}</h2>
        <p>
          <span>{subTitleTop}</span>
          <span>{subTitleBottom}</span>
        </p>
      </div>
      <Link exact="true" to={`/${link}`}>
        {linkName}
      </Link>
    </header>
  );
};

HeaderLists.propTypes = {
  title: PropTypes.string,
  subTitleTop: PropTypes.string,
  subTitleBottom: PropTypes.string,
  link: PropTypes.string,
  linkName: PropTypes.string,
  children: PropTypes.any,
};
export default HeaderLists;
