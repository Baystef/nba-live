import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import api from '../api/nba';
import Home from './Home';
import Nav from './Nav';
import Tabs from './Tabs';
// import EventList from './Event/EventList';
import Teams from './Event/Teams/Teams';
import Standings from './Event/Standings/Standings';

class App extends Component {
  loadData = async (term) => {
    const { KEY } = process.env;
    const result = await api.get(`/${term}`, {
      params: {
        key: KEY
      }
    });

    return result;
  };


  render() {
    return (
      <div id="main-wrapper">
        <Nav />
        <Tabs season={this.loadData} />
        <Switch>
          {/* <Route path="/results" exact>
            <EventList />
          </Route> */}
          <Route path="/teams">
            <Teams teams={this.loadData} />
          </Route>
          <Route path="/standings">
            <Standings standings={this.loadData} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
