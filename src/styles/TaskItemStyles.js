import styled from '@emotion/styled';

import check from '../img/check.svg';

const Container = styled.div`
  padding: 20px 32px 18px 32px;
  border-bottom: 1px solid #dfe0eb;
  &:last-of-type {
    border: none;
  }
  & > div {
    display: flex;
    justify-content: space-between;
  }
  & > div > label {
    display: flex;
    align-items: center;
    font-family: 'Muli', Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #252733;
  }
  & > div > label > input {
    margin: 0;
    margin-right: 16px;
    width: 20px;
    height: 20px;
    border: 2px solid #c5c7cd;
    box-sizing: border-box;
    position: relative;
  }

  & > div > label > input[type='radio']:before {
    width: 20px;
    height: 20px;
    border-radius: 15px;
    position: relative;
    background-color: #ffffff;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid #c5c7cd;
    box-sizing: border-box;
    cursor: pointer;
  }

  & > div > label > input[type='radio']:checked:before {
    width: 20px;
    height: 20px;
    position: relative;
    background-color: #3751ff;
    content: '';
    border: none;
    cursor: poiner;
  }
  & > div > label > input[type='radio']:checked:after {
    width: 12px;
    height: 9px;
    left: 18%;
    right: 25%;
    top: 30%;
    position: absolute;
    background-image: url(${check});
    content: '';
    border: none;
    z-index: 1;
    cursor: pointer;
  }
  &:first-of-type > div > label > input {
    width: 330px;
    border: none;
    font-family: 'Muli', Arial, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #c5c7cd;
  }
  &:first-of-type > div > button {
    width: 24px;
    height: 24px;
    padding: 7px;
  }
`;
const Button = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 5px 12px;
  font-family: 'Muli', Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 14px;
  align-items: center;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background-color: ${props => {
    let prColor = '';
    if (props.buttonBg === 'Plus') {
      prColor = '#F0F1F7';
    }
    if (props.buttonBg === 'Urgent') {
      prColor = '#FEC400';
    }
    if (props.buttonBg === 'New') {
      prColor = '#29CC97';
    }
    if (props.buttonBg === 'Default') {
      prColor = '#F0F1F7';
    }
    return prColor;
  }};
  color: ${props => {
    let prColor = '';
    if (props.textColor === 'Urgent') {
      prColor = '#FFFFFF';
    }
    if (props.textColor === 'New') {
      prColor = '#FFFFFF';
    }
    if (props.textColor === 'Default') {
      prColor = '#9FA2B4';
    }
    return prColor;
  }};
`;

export { Container, Button };
