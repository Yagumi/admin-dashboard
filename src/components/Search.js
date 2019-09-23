import React from 'react';
import search from '../img/search.svg';

import { Container, Input, Image } from '../styles/SearchStyles';

function Search() {
  return (
    <Container>
      <Input type="text" />
      <Image src={search} alt="search" />
    </Container>
  );
}
export default Search;
