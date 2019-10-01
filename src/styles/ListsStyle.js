import styled from '@emotion/styled';
import ListItem from '../containers/ListItem';

const TicketsHeader = styled(ListItem)`
  display: flex;
  padding: 0px 31px 12px 31px;
  font-family: 'Muli', Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.2px;
  color: #9fa2b4;
  border-bottom: 1.5px solid #dfe0eb;
`;
const Tickets = styled.h4`
  width: 440px;
  margin: 0;
`;

const Name = styled.h4`
  width: 208px;
  margin: 0 0 0 40px;
`;
const Date = styled.h4`
  width: 140px;
  margin: 0 0 0 40px;
`;
const Priority = styled.h4`
  width: 104px;
  margin: 0 0 0 40px;
`;

export { TicketsHeader, Tickets, Name, Date, Priority };
