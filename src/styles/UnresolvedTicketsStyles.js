import styled from '@emotion/styled';
import { css } from '@emotion/core';

const sameContainersStyles = css({
  marginTop: '30px',
  width: '50%',
  background: '#ffffff',
  border: '1px solid #dfe0eb',
  boxSizing: 'border-box',
  borderRadius: '8px',
});

const Container = styled.div`
  ${sameContainersStyles}
  & > ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  & > ul > li {
    padding: 20px 32px 18px 32px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dfe0eb;
  }
  & > ul > li:last-of-type {
    border-bottom: none;
  }
  & > ul > li > h4 {
    margin: 0;
    font-family: 'Muli', Arial, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #252733;
  }
  & > ul > li > span {
    font-family: 'Muli', Arial, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.2px;
    color: #9fa2b4;
  }
`;

export default Container;
