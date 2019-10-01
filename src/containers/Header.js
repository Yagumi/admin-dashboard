import React from 'react';
import PropTypes from 'prop-types';

import Container from '../styles/HeaderStyles';

import Search from '../components/Search';
import Notification from './Notification';
import UserAvatar from './UserAvatar';

function Header({ title, children }) {
  return (
    <Container title={title}>
      {children}
      <Search />
      <Notification />
      <UserAvatar />
    </Container>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default Header;
