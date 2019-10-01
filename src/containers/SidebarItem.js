import React from 'react';

import PropTypes from 'prop-types';

import { Container, Image, Title } from '../styles/SidebarItemStyles';

const SidebarItem = ({ item, ...props }) => {
  const { img, title } = item;
  return (
    <Container
      exact
      to={`/${title}`}
      activeStyle={{
        fontWeight: 'bold',
        color: 'red',
      }}
      {...props}
    >
      <Image src={img} alt={title} />
      <Title>{title}</Title>
    </Container>
  );
};

SidebarItem.propTypes = {
  item: PropTypes.object,
  img: PropTypes.string,
  title: PropTypes.string,
};
export default SidebarItem;
