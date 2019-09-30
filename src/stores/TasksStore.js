/* eslint-disable no-console */
import { observable, action, configure, decorate, computed } from 'mobx';
import uuid from 'uuid/v4';

configure({ enforceActions: 'observed' });

class TasksStore {
  tasks = [];

  taskValue = '';

  radioValue = 'option3';

  updateTaskValue(value) {
    this.taskValue = value;
  }

  get taskVal() {
    return this.taskValue;
  }

  updateRadioValue(value) {
    this.radioValue = value;
  }

  get radioVal() {
    return this.radioValue;
  }

  addNewTask() {
    if (this.radioValue === 'option1') {
      this.tasks.push({ id: uuid(), title: this.taskValue, ticket: 'Urgent' });
      this.taskValue = '';
    }
    if (this.radioValue === 'option2') {
      this.tasks.push({ id: uuid(), title: this.taskValue, ticket: 'New' });
      this.taskValue = '';
    }
    if (this.radioValue === 'option3') {
      this.tasks.push({ id: uuid(), title: this.taskValue, ticket: 'Default' });
      this.taskValue = '';
    }

    console.log(this.tasks);
  }
}

decorate(TasksStore, {
  tasks: observable.shallow,
  taskValue: observable,
  radioValue: observable,

  updateTaskValue: action,
  updateRadioValue: action,
  addNewTask: action,

  taskVal: computed,
  radioVal: computed,
});

const tasksStore = new TasksStore();
export default tasksStore;
