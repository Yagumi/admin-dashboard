import styled from '@emotion/styled';

const Container = styled.div`
  padding: 32px 32px 48px 32px;
  display: flex;
  align-items: center;
  & > h3 {
    margin: 0;
    font-family: 'Muli', Arial, sans-serif;
    font-weight: bold;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #252733;
  }
  & > button:first-of-type {
    margin-left: auto;
  }
  & > button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-family: 'Muli', Arial, sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #4b506d;
  }
  & > button > img {
    padding-right: 9px;
  }
`;

export default Container;
