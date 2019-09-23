import styled from '@emotion/styled';

import List from '../components/List';

const Cards = styled(List)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
  cursor: pointer;
  background-color: #f7f8fc;
  & > li {
    width: 258px;
    height: 134px;
    border: 1px solid #dfe0eb;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
  & > li:hover,
  & > li:active {
    border: 1px solid #3751ff;
    & > li > h3 {
      color: #3751ff;
    }
    & > li > span {
      color: #3751ff;
    }
  }
  & > li > h3 {
    margin: 0;
    font-family: 'Muli', Arial, sans-serif;
    font-weight: bold;
    font-size: 19px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #9fa2b4;
  }
  & > li > span {
    padding-top: 12px;
    font-family: 'Muli', Arial, sans-serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 1px;
    color: #252733;
  }
`;

export default Cards;
