/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

import {
  Container,
  TicketsContainer,
  TicketsHeader,
  TicketsList,
  CardsList,
  Footer,
} from '../styles/MainContentStyles';

import Sort from './Sort';
import TicketsFooter from './TicketsFooter';
import UnresolvedTickets from '../containers/UnresolvedTickets';
import TaskOverview from './TasksOverview';

const MainContent = inject('ticketsStore', 'overviewStore')(
  observer(({ ticketsStore, overviewStore, title, children }) => {
    useEffect(() => {
      ticketsStore.fetchTickets();
    }, []);
    useEffect(() => {
      overviewStore.fetchUnresolvedData();
    }, []);

    if (title === 'Overview') {
      return (
        <Container>
          <CardsList data={overviewStore.cardList} name="cards" />
          <Footer>
            <UnresolvedTickets />
            <TaskOverview />
          </Footer>
          {children}
        </Container>
      );
    }
    if (title === 'Tickets') {
      return (
        <TicketsContainer>
          <Sort />
          <TicketsHeader data={ticketsStore.viewTicketsHeader} name="ticketsHeader" />
          <TicketsList data={ticketsStore.filtredTickets} name="ticketList" />
          <TicketsFooter />
          {children}
        </TicketsContainer>
      );
    }

    return <section>{children}</section>;
  }),
);

MainContent.propTypes = {
  ticketsData: PropTypes.any,
  overviewData: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.string,
};
export default MainContent;
