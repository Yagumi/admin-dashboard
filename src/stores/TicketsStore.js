/* eslint-disable no-console */
import { observable, action, configure, decorate, runInAction, computed } from 'mobx';

configure({ enforceActions: 'observed' });

class TicketsStore {
  ticketsHeader = [
    { title: 'Ticket details', name: 'Customer name', date: 'Date', priority: 'Priority' },
  ];

  tickets = observable.array();

  currentId = 0;

  result = 0;

  sortVal = false;

  filter = '';

  fetchTickets = async () => {
    await fetch('http://www.json-generator.com/api/json/get/ceBqMfCdbC?indent=2')
      .then(response => response.json())
      .then(data => {
        runInAction(() => {
          this.tickets = data;
          // this.allPages = [...this.allPages, data];
          data.map(() => this.result++);
        });
      });
  };

  get viewTicketsHeader() {
    return this.ticketsHeader.map(item => item);
  }

  goToNextPage = async () => {
    await fetch('http://www.json-generator.com/api/json/get/cpkRrMXVvm?indent=2')
      .then(response => response.json())
      .then(data => {
        runInAction(() => {
          this.currentId += 1;
          data.map(() => this.result++);
          this.tickets = data;
        });
      });
  };

  goToPrevPage = async () => {
    await fetch('http://www.json-generator.com/api/json/get/bVxKtlPCXm?indent=2')
      .then(response => response.json())
      .then(data => {
        runInAction(() => {
          this.currentId -= 1;
          data.map(() => this.result--);
          this.tickets = data;
        });
      });
  };

  get NumberOfTickets() {
    if (this.result === 0) {
      return this.result;
    }
    return this.result - 7;
  }

  get numOptions() {
    return this.currentId;
  }

  sort() {
    this.tickets.map(item => {
      if (item.priority === 'HIGH') {
        item.priorityRang = 3;
      }
      if (item.priority === 'NORMAL') {
        item.priorityRang = 2;
      }
      if (item.priority === 'LOW') {
        item.priorityRang = 1;
      }
      return item;
    });
    if (this.sortVal === false) {
      this.sortVal = true;
      return this.tickets.replace(
        this.tickets.slice().sort((a, b) => a.priorityRang - b.priorityRang),
      );
    }
    if (this.sortVal === true) {
      this.sortVal = false;
      return this.tickets.replace(
        this.tickets.slice().sort((a, b) => b.priorityRang - a.priorityRang),
      );
    }
    return null;
  }

  get filtredTickets() {
    const matchesFilter = new RegExp(this.filter, 'i');
    return this.tickets.filter(({ task }) => !this.filter || matchesFilter.test(task));
  }

  updateFilter(value) {
    this.filter = value;
  }

  get currentIdValue() {
    return this.currentId;
  }
}

decorate(TicketsStore, {
  tickets: observable.shallow,
  filter: observable,
  result: observable,
  currentId: observable,

  viewData: action,
  goToPrevPage: action,
  sort: action,
  updateFilter: action,

  viewTicketsHeader: computed,
  NumberOfTickets: computed,
  numOptions: computed,
  filtredTickets: computed,
  currentIdValue: computed,
});

const ticketsStore = new TicketsStore();
export default ticketsStore;
