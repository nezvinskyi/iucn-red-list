import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NotificationContainer } from 'react-notifications';

import { Header, Loader } from './components';
import { MainView, MammalsView, MeasuresView, RegionSpeciesView } from './vews';

import { loaderSelector } from './redux/species';

const App = () => {
  const isLoading = useSelector(loaderSelector);
  return (
    <div className="container mx-auto">
      <Header />
      <Switch>
        <Route path="/" exact component={MainView} />
        <Route path="/species" component={RegionSpeciesView} />
        <Route path="/measures" component={MeasuresView} />
        <Route path="/mammals" component={MammalsView} />
        <Redirect to="/" />
      </Switch>
      <NotificationContainer />
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
