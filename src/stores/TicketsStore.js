/* eslint-disable no-console */
import { observable, action, configure, decorate, runInAction } from 'mobx';
// import axios from 'axios';

configure({ enforceActions: 'observed' });

class TicketsStore {
  ticketsHeader = [
    { title: 'Ticket details', name: 'Customer name', date: 'Date', priority: 'Priority' },
  ];

  tickets = [];

  getTickets = async () => {
    // eslint-disable-next-line no-unused-vars
    const res = await fetch('http://www.json-generator.com/api/json/get/bVRFSTnmaa?indent=2')
      .then(response => response.json())
      .then(data => {
        // eslint-disable-next-line no-console
        console.log(data);
        runInAction(() => {
          this.tickets = data;
        });
      });

    // const res = await axios.get('http://www.json-generator.com/api/json/get/cgAWpBccUi?indent=2');
    // console.log(res.value);
    // console.log(res);
    // runInAction(() => {
    //   this.tickets = res.data;
    //   return this.tickets;
    // });
  };

  viewPage = () => {
    return this.tickets.filter((item, index) => index <= 7);
  };

  viewAllPages = () => {
    return this.tickets.map(item => item);
  };

  getTicketsHeader = () => {
    return this.ticketsHeader.map(item => item);
  };
}

decorate(TicketsStore, {
  tickets: observable.shallow,
  viewData: action,
  getTicketsHeader: action,
});

export default new TicketsStore();
