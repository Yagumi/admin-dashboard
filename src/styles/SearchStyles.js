import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-left: 30px;
  padding-left: 10px;
  height: 34px;
  border: none;
  padding-right: 46px;
`;

const Image = styled.img`
  position: absolute;
  right: 15px;
  width: 16px;
  height: 16px;
`;

export { Container, Input, Image };
