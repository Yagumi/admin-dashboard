import { observable } from 'mobx';
import uuid from 'uuid/v4';

const overviewStore = observable(
  {
    cards: [
      { id: uuid(), title: 'Unresolved', num: 60 },
      { id: uuid(), title: 'Overdue', num: 16 },
      { id: uuid(), title: 'Open', num: 43 },
      { id: uuid(), title: 'On hold', num: 64 },
    ],

    get cardList() {
      return this.cards.map(item => item);
    },
  },
  {
    // cardList: action,
  },
);

export default overviewStore;
