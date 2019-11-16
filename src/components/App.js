import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Tabs from './Tabs';
// import EventList from './Event/EventList';
import Teams from './Event/Teams/Teams';
import Standings from './Event/Standings/Standings';

const App = () => {
  return (
    <div id="main-wrapper">
      <Nav />
      <Tabs />
      <Switch>
        {/* <Route path="/results" exact>
            <EventList />
          </Route> */}
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/standings">
          <Standings />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
