import styled from '@emotion/styled';

const Container = styled.footer`
  padding: 24px 32px 24px 0;
  display: flex;
  border-top: 1px solid #dfe0eb;
  & > label {
    position: relative;
    margin-left: auto;
    font-family: 'Muli', Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;

    letter-spacing: 0.3px;
    color: #9fa2b4;
  }
  & > label > select {
    border: none;
    padding-right: 20px;
    padding-left: 8px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-family: 'Muli', Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.3px;
    color: #4b506d;
  }
  & > label:after {
    content: '▼';
    padding: 0 8px;
    font-size: 12px;
    position: absolute;
    right: 8px;
    top: 1.5px;
    z-index: 1;
    text-align: center;
    width: 6.97px;
    height: 3.95px;
    pointer-events: none;
    box-sizing: border-box;
  }
  & > span {
    margin-left: 48px;
    font-family: 'Muli', Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.3px;
    color: #9fa2b4;
  }
  & > div {
    margin-left: 24px;
    display: flex;
    align-items: center;
  }
  & > div > button {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  & > div > button:last-of-type {
    margin-left: 12px;
  }
`;

export default Container;
