import React from 'react';
import { observer, inject } from 'mobx-react';
// import uuid from 'uuid/v4';

import Container from '../styles/TicketsFooterStyles';

import prev from '../img/left.svg';
import next from '../img/right.svg';

const TicketsFooter = inject('ticketsStore')(
  observer(({ ticketsStore }) => {
    const goToNext = () => {
      ticketsStore.goToNextPage();
    };

    const goToPrev = () => {
      ticketsStore.goToPrevPage();
    };
    return (
      <Container>
        <label htmlFor="Tickets">
          Rows per page:
          <select id="Tickets">
            <option value="">1</option>
          </select>
        </label>
        <span>
          {ticketsStore.NumberOfTickets} - {ticketsStore.result} of {ticketsStore.result}
        </span>
        <div>
          <button type="button" onClick={goToPrev} disabled={ticketsStore.currentIdValue === 0}>
            <img src={prev} alt="previous page" />
          </button>
          <button type="button" onClick={goToNext}>
            <img src={next} alt="next page" />
          </button>
        </div>
      </Container>
    );
  }),
);

export default TicketsFooter;
