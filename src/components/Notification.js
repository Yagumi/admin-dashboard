import React from 'react';

import { Container, Image } from '../styles/NotificationStyles';

import bell from '../img/new.svg';

function Notification() {
  return (
    <Container>
      <Image src={bell} alt="notification" />
    </Container>
  );
}

export default Notification;
