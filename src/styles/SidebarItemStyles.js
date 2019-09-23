import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled(NavLink)`
  padding-top: 18px;
  padding-bottom: 18px;
  position: relative;
  width: 100%;
  display: flex;
  text-decoration: none;

  &:hover {
    background-color: #9fa2b4;
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 3px;
      height: 100%;
      background-color: #dde2ff;
    }
  }
  &:hover > img {
    fill: #dde2ff;
  }
  &:hover > h2 {
    color: #dde2ff;
  }
`;

const Image = styled.img`
  padding-left: 32px;
`;
const Title = styled.h2`
  margin: 0;
  padding-left: 24px;
  font-family: 'Muli', Arial, sasn-serif;
  font-size: 16px;
  letter-spasing: 0.2px;
  color: #a4a6b3;
`;
export { Container, Image, Title };
