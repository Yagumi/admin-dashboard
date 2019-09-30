/* eslint-disable no-console */
import React from 'react';
import { inject, observer } from 'mobx-react';

import HeaderListsContainer from '../styles/HeaderListsStyles';
import Container from '../styles/UnresolvedTicketsStyles';

const TasksOverview = inject('overviewStore')(
  observer(({ overviewStore }) => {
    return (
      <Container>
        <HeaderListsContainer
          title="Unresolved tickets"
          subTitleTop="Group:"
          subTitleBottom="Support"
          linkName="View details"
        />
        <ul>
          {overviewStore.unresolvedList.map(item => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <span>{item.num}</span>
            </li>
          ))}
        </ul>
      </Container>
    );
  }),
);

export default TasksOverview;
