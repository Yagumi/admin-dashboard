import React from 'react';
import { inject, observer } from 'mobx-react';
import search from '../img/search.svg';

import { Container, Input, Image } from '../styles/SearchStyles';

const Search = inject('ticketsStore')(
  observer(({ ticketsStore }) => {
    // eslint-disable-next-line no-console
    console.log(ticketsStore.filter);
    const handleChange = ({ target: { value } }) => {
      ticketsStore.updateFilter(value);
    };
    return (
      <Container>
        <Input type="text" value={ticketsStore.filter} onChange={handleChange} />
        <Image src={search} alt="search" />
      </Container>
    );
  }),
);

export default Search;
