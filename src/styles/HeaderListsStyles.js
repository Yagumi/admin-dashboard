import styled from '@emotion/styled';
import { css } from '@emotion/core';

import HeaderLists from '../containers/HeaderLists';

const titleSame = css({
  margin: 0,
  fontFamily: 'Muli, Arial, sans-serif',
  fontWeight: 'bold',
  fontSize: '19px',
  lineHeight: '24px',
  letterSpacing: '0.4px',
  color: '#252733',
});

const subTitle = css({
  fontFamily: 'Muli, Arial, sans-serif',
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '0.1px',
  color: '#9FA2B4',
});

const HeaderListsContainer = styled(HeaderLists)`
  display: flex;
  align-items: flex-start;
  padding: 32px 32px 8px 32px;
  & > div > h2 {
    ${titleSame}
  }
  & > div > p {
    margin: 0;
  }
  & > div > p > span:first-of-type {
    ${subTitle}
  }
  & > a {
    margin-left: auto;
    text-decoration: none;
    font-family: 'Muli', Arial, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.2px;
    color: #3751ff;
    cursor: pointer;
  }
`;

export default HeaderListsContainer;
