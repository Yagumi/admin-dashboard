/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import more from '../img/more.svg';

import {
  Item,
  AvatarContainer,
  TaskContainer,
  CustomerContainer,
  DateContainer,
  PriorityContainer,
  MoreButton,
} from '../styles/TicketsStyles';

const TicketItem = ({ data }) => {
  return (
    <Item key={data.id}>
      <AvatarContainer>
        <img src={data.picture} alt={data.customerName} />
      </AvatarContainer>
      <TaskContainer>
        <p>{data.task}</p>
        <span>
          Updated {data.updatedTime} {data.updatedTime <= 1 ? 'day' : 'days'} ago
        </span>
      </TaskContainer>
      <CustomerContainer>
        <span>{data.customerName}</span>
        <span>on{data.customerDate}</span>
      </CustomerContainer>
      <DateContainer>
        <span>{data.dateLabel}</span>
        <span>{data.timeLabel}</span>
      </DateContainer>
      <PriorityContainer priority={data.priority}>
        <span>{data.priority}</span>
      </PriorityContainer>
      <MoreButton type="button">
        <img src={more} alt="more" />
      </MoreButton>
    </Item>
  );
};

TicketItem.propTypes = {
  data: PropTypes.object,
};

export default TicketItem;
