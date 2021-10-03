import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Header } from './components';
import { MainView, MammalsView, MeasuresView, RegionSpeciesView } from './vews';

const App = () => (
  <div className="container mx-auto">
    <Header />
    <Switch>
      <Route path="/" exact component={MainView} />
      <Route path="/species" component={RegionSpeciesView} />
      <Route path="/measures" component={MeasuresView} />
      <Route path="/mammals" component={MammalsView} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
