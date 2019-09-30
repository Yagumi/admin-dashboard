import styled from '@emotion/styled';
import Lists from '../components/Lists';

const Container = styled.main`
  padding: 0 30px 30px 30px;
`;
const TicketsContainer = styled.main`
  margin: 0 30px 30px 30px;
  background-color: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  & > h1 {
    margin: 0;
    font-family: 'Muli', Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.3px;
    color: #252733;
  }
  & > h3 {
    margin: 0;
    padding: 32px 0 48px 31px;
    font-family: 'Muli', Arial, sans-serif;
    font-weight: bold;
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
    color: #252733;
  }
`;
const TicketsHeader = styled(Lists)`
  padding: 0;
  margin: 0;
`;
const TicketsList = styled(Lists)`
  padding: 0;
  margin: 0;
`;

const CardsList = styled(Lists)`
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

// Overview page
const Footer = styled.footer`
  display: flex;
`;

export { Container, TicketsContainer, TicketsHeader, TicketsList, CardsList, Footer };
