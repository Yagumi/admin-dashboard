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
  margin-left: 30px;
`;

export default Container;
