import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  width: 255px;
  background-color: #363740;
`;

const Logo = styled(NavLink)`
  padding: 41px 0 63px 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  & > img {
    width: 32px;
    height: 32px;
    padding-left: 32px;
  }
  & > h1 {
    margin: 0;
    padding-left: 12px;
    font-family: 'Muli', Arial, sans-serif;
    font-weight: bold;
    font-size: 19px;
    line-height: 24px;
    color: #a4a6b3;
  }
`;

const List = styled.ul`
  width: 100%;
  padding-left: 0;
  margin: 0;
`;

export { Container, Logo, List };
