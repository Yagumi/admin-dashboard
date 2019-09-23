import styled from '@emotion/styled';
import { css } from '@emotion/core';

const TicketHeader = css({
  fontFamily: 'Muli, Arial, sans-serif',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.2px',
  color: '#252733',
});

const TicketFooter = css({
  paddingTop: '4px',
  fontFamily: 'Muli, Arial, sans-serif',
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '0.1px',
  color: '#c5c7cd',
});

const Item = styled.li`
  padding: 24px 31px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  border-bottom: 1px solid #dfe0eb;
  &:last-of-type {
    border-bottom: none;
  }
`;

const AvatarContainer = styled.div`
  & > img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`;

const TaskContainer = styled.div`
  padding-left: 24px;
  width: 372px;
  display: flex;
  flex-direction: column;
  & > p {
    ${TicketHeader}
    margin: 0;
  }
  & > span:last-of-type {
    ${TicketFooter}
  }
`;

const CustomerContainer = styled.div`
  padding-left: 40px;
  width: 208px;
  display: flex;
  flex-direction: column;
  & > span:first-of-type {
    ${TicketHeader}
  }

  & > span:last-of-type {
    ${TicketFooter}
  }
`;

const DateContainer = styled.div`
  padding-left: 40px;
  width: 140px;
  display: flex;
  flex-direction: column;
  & > span:first-of-type {
    ${TicketHeader}
  }

  & > span:last-of-type {
    ${TicketFooter}
  }
`;

const PriorityContainer = styled.div`
  margin-left: 40px;
  background-color: ${props => {
    let prColor = '';
    if (props.priority === 'HIGH') {
      prColor = '#F12B2C';
    }
    if (props.priority === 'NORMAL') {
      prColor = '#29CC97';
    }
    if (props.priority === 'LOW') {
      prColor = '#FEC400';
    }
    return prColor;
  }};
  border-radius: 100px;
  & > span {
    padding: 5px 12px;
    color: #ffffff;
    font-family: 'Muli', Arial, sans-serif;
    font-weight: bold;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

const MoreButton = styled.button`
  margin-left: auto;
  cursore: pointer;
  background-color: #ffffff;
  border: none;
`;
export {
  Item,
  AvatarContainer,
  TaskContainer,
  CustomerContainer,
  DateContainer,
  PriorityContainer,
  MoreButton,
};
