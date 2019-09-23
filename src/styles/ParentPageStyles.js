import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  & > div {
    width: 255px;
  }
`;
const Content = styled.div`
  flex-grow: 1;
  background-color: #f7f8fc;
`;
const Title = styled.h1`
  margin-right: auto;
  align-self: center;
  font-family: 'Muli', Arial, sans-serif;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.3px;
  color: #252733;
`;

export { Container, Content, Title };
