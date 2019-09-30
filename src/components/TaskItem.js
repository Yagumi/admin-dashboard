/* eslint-disable no-console */
import React from 'react';
import { inject, observer } from 'mobx-react';

import { Container, Button } from '../styles/TaskItemStyles';

const TaskItem = inject('tasksStore')(
  observer(
    ({
      tasksStore,
      text,
      name,
      type,
      value,
      change,
      check,
      buttonName,
      buttonBg,
      textColor,
      updateTasksList,
      children,
      ...props
    }) => {
      return (
        <Container {...props}>
          <div>
            <label htmlFor={name}>
              <input
                type={type}
                id={name}
                placeholder="Create new task"
                value={value}
                onChange={change}
                checked={check}
              />
              {text}
            </label>
            <Button
              type="button"
              buttonBg={buttonBg}
              textColor={textColor}
              onClick={updateTasksList}
            >
              {buttonName}
            </Button>
          </div>
          {children}
        </Container>
      );
    },
  ),
);

export default TaskItem;
