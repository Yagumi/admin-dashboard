import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0 0 0 64px;
  display: flex;
  align-items: center;
  & > h3 {
    margin: 0;
    font-family: 'Muli', Arial, sasn-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: 0.2px;
    color: #252733;
  }
  & > img {
    padding-left: 14px;
    width: 44px;
    height: 44px;
  }
`;

export default Container;
