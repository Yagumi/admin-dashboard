import React from 'react';
import PropTypes from 'prop-types';

import logo from '../img/logo.svg';
import Overview from '../img/1. overview.svg';
import Tickets from '../img/2. tickets.svg';
import Ideas from '../img/3. ideas.svg';
import Contacts from '../img/4. contacts.svg';
import Agents from '../img/5. agents.svg';
import Articles from '../img/6. articles.svg';
import Settings from '../img/a_1. settings.svg';
import Subscription from '../img/a_2. subscription.svg';
import { Container, Logo, List } from '../styles/SidebarListStyles';

import SidebarItem from '../containers/SidebarItem';

const SidebarList = ({ list, ...props }) => {
  return (
    <Container {...props}>
      <Logo exact to="/">
        <img src={logo} alt={logo} />
        <h1>Dashboard Kit</h1>
      </Logo>
      <List>
        {list.map(item => (
          <SidebarItem key={item.title} item={item} />
        ))}
      </List>
    </Container>
  );
};

SidebarList.defaultProps = {
  list: [
    { img: Overview, title: 'Overview' },
    { img: Tickets, title: 'Tickets' },
    { img: Ideas, title: 'Ideas' },
    { img: Contacts, title: 'Contacts' },
    { img: Agents, title: 'Agents' },
    { img: Articles, title: 'Articles' },
    { img: Settings, title: 'Settings' },
    { img: Subscription, title: 'Subscription' },
  ],
};

SidebarList.propTypes = {
  list: PropTypes.array,
};
export default SidebarList;
