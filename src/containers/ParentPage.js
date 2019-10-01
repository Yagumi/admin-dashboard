import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import { Container, Content, Title } from '../styles/ParentPageStyles';

import SidebarList from '../components/SidebarList';
import Header from './Header';
import MainContent from '../components/MainContent';

const ParentPage = observer(({ match }) => {
  const title = match.params.name;
  return (
    <Container>
      <SidebarList />
      <Content>
        <Header title={title}>
          <Title>{title}</Title>
        </Header>
        <MainContent title={title} />
      </Content>
    </Container>
  );
});

ParentPage.propTypes = {
  match: PropTypes.object,
};

export default ParentPage;
