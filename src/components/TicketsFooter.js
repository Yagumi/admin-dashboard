import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import prev from '../img/left.svg';
import next from '../img/right.svg';

const TicketsFooter = ({ data }) => {
  const [tickets, useTickets] = useState(0);

  useEffect(() => {
    const taskCounting = () => {
      let allTickets = 0;
      data.map(() => allTickets++);
      useTickets(allTickets);
    };
    taskCounting();
  });

  return (
    <div>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <span>1-8 of {tickets}</span>
      <div>
        <img src={prev} alt="previous page" />
        <img src={next} alt="next page" />
      </div>
    </div>
  );
};

TicketsFooter.propTypes = {
  data: PropTypes.array,
};
export default TicketsFooter;
