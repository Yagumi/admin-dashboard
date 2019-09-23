/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  TicketsContainer,
  TicketsHeader,
  TicketsList,
  CardsList,
} from '../styles/MainContentStyles';

import TicketsFooter from './TicketsFooter';

const MainContent = ({ ticketsData, overviewData, title, children }) => {
  if (title === 'Overview') {
    return (
      <Container>
        <CardsList data={overviewData.cardList} name="cards" />
        {children}
      </Container>
    );
  }

  if (title === 'Tickets') {
    return (
      <TicketsContainer>
        <h3>All Tickets</h3>
        <TicketsHeader data={ticketsData.getTicketsHeader()} name="ticketsHeader" />
        <TicketsList data={ticketsData.viewPage()} name="ticketList" />
        <TicketsFooter data={ticketsData.viewAllPages()} />
        {children}
      </TicketsContainer>
    );
  }

  return <section>{children}</section>;
};

MainContent.propTypes = {
  ticketsData: PropTypes.any,
  overviewData: PropTypes.any,
  children: PropTypes.any,
  title: PropTypes.string,
};
export default MainContent;
