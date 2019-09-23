import React from 'react';

import Container from '../styles/UserAvatarStyles';

import avatarPhoto from '../img/photo.png';

function UserAvatar() {
  return (
    <Container>
      <h3>Jones Ferdinand</h3>
      <img src={avatarPhoto} alt="Jones Ferdinand" />
    </Container>
  );
}

export default UserAvatar;
