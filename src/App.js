import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './components';
import { MainView } from './vews';

const App = () => (
  <div className="container mx-auto">
    <Header />
    <Switch>
      <Route path="/" exact component={MainView} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
