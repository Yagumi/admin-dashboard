import React from 'react';
import { inject, observer } from 'mobx-react';

import sortImg from '../img/sort.svg';
import filterImg from '../img/filter.svg';

import Container from '../styles/SortStyles';

const Sort = inject('ticketsStore')(
  observer(({ ticketsStore }) => {
    const handleSort = () => {
      ticketsStore.sort();
    };
    return (
      <Container>
        <h3>All Tickets</h3>
        <button type="button" onClick={handleSort}>
          <img src={sortImg} alt="sort" />
          Sort
        </button>
        <button type="button">
          <img src={filterImg} alt="filter" />
          Filter
        </button>
      </Container>
    );
  }),
);

export default Sort;
