import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ticketsStore from './stores/TicketsStore';
import overviewStore from './stores/OverviewStore';
import tasksStore from './stores/TasksStore';

const stores = { ticketsStore, overviewStore, tasksStore };

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
