import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import TicketsStore from '../stores/TicketsStore';
import OverviewStore from '../stores/OverviewStore';

import { Container, Content, Title } from '../styles/ParentPageStyles';

import SidebarList from './SidebarList';
import Header from './Header';
import MainContent from './MainContent';

const ParentPage = observer(({ match }) => {
  const title = match.params.name;
  useEffect(() => {
    TicketsStore.getTickets();
  }, []);
  return (
    <Container>
      <SidebarList />
      <Content>
        <Header title={title}>
          <Title>{title}</Title>
        </Header>
        <MainContent title={title} ticketsData={TicketsStore} overviewData={OverviewStore} />
      </Content>
    </Container>
  );
});

ParentPage.propTypes = {
  match: PropTypes.object,
};

export default ParentPage;
