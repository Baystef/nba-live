/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import StandingsList from './StandingsList';
import Spinner from '../../Spinner';
import './Standings.css';

class Standings extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.getStandings();
  }

  getStandings = async () => {
    const { standings } = this.props;
    const { data: { Season } } = await standings('CurrentSeason');
    const result = await standings(`Standings/${Season}`);
    this.setState({ data: result.data });
  }

  renderStandings = (component) => {
    return (
      <>
        <div className="grid standings-header">
          <span className="rank-header">#</span>
          <span className="team-name-header">Team</span>
          <span className="matches-header">MP</span>
          <span className="wins-header">W</span>
          <span className="losses-header">L</span>
          <span className="percentage-header">PCT(%)</span>
        </div>
        {component}
      </>
    );
  }

  render() {
    const { data } = this.state;

    if (!data.length) {
      return <Spinner />;
    }

    const standingsList = data.sort((a, b) => b.Percentage - a.Percentage).map((standing, i) => {
      return <StandingsList standing={standing} index={i} key={standing.TeamID} />;
    });

    return (
      <div className="standings-wrapper container">
        {this.renderStandings(standingsList)}
      </div>
    );
  }
}

export default Standings;
