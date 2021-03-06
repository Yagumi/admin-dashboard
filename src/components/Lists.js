import React from 'react';
import PropTypes from 'prop-types';

import { observer } from 'mobx-react';
import ListItem from '../containers/ListItem';
import TicketItem from '../containers/TicketItem';
import { TicketsHeader, Tickets, Name, Date, Priority } from '../styles/ListsStyle';

const Lists = observer(({ data, name, children, ...props }) => {
  if (name === 'ticketsHeader') {
    return (
      <ul data={data} {...props}>
        {data.map(item => (
          <TicketsHeader key={name} data={item}>
            <Tickets>{item.title}</Tickets>
            <Name>{item.name}</Name>
            <Date>{item.date}</Date>
            <Priority>{item.priority}</Priority>
          </TicketsHeader>
        ))}
      </ul>
    );
  }
  if (name === 'ticketList') {
    return (
      <ul data={data} {...props}>
        {data.map(item => (
          <TicketItem key={item.id} data={item} />
        ))}
      </ul>
    );
  }
  if (name === 'cards') {
    return (
      <ul data={data} {...props}>
        {data.map(item => (
          <ListItem key={item.id} data={item}>
            <h3>{item.title}</h3>
            <span>{item.num}</span>
          </ListItem>
        ))}
      </ul>
    );
  }
  if (name === 'unresolvedList') {
    return (
      <ul data={data} {...props}>
        {data.map(item => (
          <ListItem key={item.id} data={item}>
            <h3>{item.title}</h3>
            <span>{item.num}</span>
          </ListItem>
        ))}
      </ul>
    );
  }

  return <ul>{children}</ul>;
});

Lists.propTypes = {
  data: PropTypes.any,
  name: PropTypes.string,
  children: PropTypes.any,
};
export default Lists;
