import { observable, configure, decorate, runInAction, computed } from 'mobx';
import uuid from 'uuid/v4';

configure({ enforceActions: 'observed' });

class OverviewStore {
  cards = [
    { id: uuid(), title: 'Unresolved', num: 60 },
    { id: uuid(), title: 'Overdue', num: 16 },
    { id: uuid(), title: 'Open', num: 43 },
    { id: uuid(), title: 'On hold', num: 64 },
  ];

  unresolvedList = [];

  get cardList() {
    return this.cards.map(item => item);
  }

  fetchUnresolvedData = async () => {
    await fetch('http://www.json-generator.com/api/json/get/cfOgQTxsuq?indent=2')
      .then(res => res.json())
      .then(data => {
        runInAction(() => {
          this.unresolvedList = data;
        });
      });
  };

  get viewUnresolvedList() {
    return this.unresolvedList.map(item => item);
  }
}

decorate(OverviewStore, {
  unresolvedList: observable,
  viewUnresolvedList: computed,
});

const overviewStore = new OverviewStore();

export default overviewStore;
