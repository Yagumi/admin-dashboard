import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ParentPage from './components/ParentPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/:name" render={routeProps => <ParentPage {...routeProps} />} />
    </Switch>
  );
}
export default App;
