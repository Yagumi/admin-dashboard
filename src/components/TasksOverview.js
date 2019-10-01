/* eslint-disable no-console */
import React from 'react';
import { inject, observer } from 'mobx-react';

import Container from '../styles/TasksOverviewStyles';
import HeaderListsContainer from '../styles/HeaderListsStyles';
import TaskItem from '../containers/TaskItem';
import plus from '../img/plus.svg';

const TasksOverview = inject('tasksStore')(
  observer(({ tasksStore }) => {
    const updateRadio = ({ target: { value } }) => {
      tasksStore.updateRadioValue(value);
    };
    const updateTask = ({ target: { value } }) => {
      tasksStore.updateTaskValue(value);
    };
    const updateTasksList = () => {
      if (tasksStore.taskVal !== '') {
        tasksStore.addNewTask();
      }
    };
    return (
      <Container>
        <HeaderListsContainer title="Tasks" subTitleTop="Today" linkName="View all" />
        <form>
          <TaskItem
            name="newTask"
            type="text"
            value={tasksStore.taskVal}
            change={updateTask}
            buttonName={<img src={plus} alt="add new task" />}
            buttonBg="Plus"
            updateTasksList={updateTasksList}
          />
          <TaskItem
            text="Finish ticket update"
            name="finish"
            type="radio"
            value="option1"
            change={updateRadio}
            check={tasksStore.radioVal === 'option1'}
            buttonName="Urgent"
            buttonBg="Urgent"
            textColor="Urgent"
          />
          <TaskItem
            text="Create new ticket example"
            name="newTicket"
            type="radio"
            value="option2"
            change={updateRadio}
            check={tasksStore.radioVal === 'option2'}
            buttonName="New"
            buttonBg="New"
            textColor="New"
          />
          <TaskItem
            text="Update ticket report"
            name="update"
            type="radio"
            value="option3"
            change={updateRadio}
            check={tasksStore.radioVal === 'option3'}
            buttonName="Default"
            buttonBg="Default"
            textColor="Default"
          />
        </form>
      </Container>
    );
  }),
);

export default TasksOverview;
